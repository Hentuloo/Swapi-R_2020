import { useSwapiList } from 'hooks/useSwapiList';
import { SwapiCharacter } from 'types/swapi';
import { renderHook, act } from '@testing-library/react-hooks';
import { exampleSwapiCharacterResponse } from '../../tests/exampleSwapiCharacterResponse';
import { queryCache } from 'react-query';

beforeEach(queryCache.clear);

const render = (props?: any) =>
    renderHook(() =>
        useSwapiList<SwapiCharacter>({
            queryFunc: (page) =>
                Promise.resolve(exampleSwapiCharacterResponse[page - 1]),
            queryKey: (page) => 'promise' + (page - 1),
            opts: {
                suspense: false,
            },
            ...props,
        }),
    );

const renderWithData = async (props?: any) => {
    const renderHookResult = render(props);

    //wait query is successful
    await renderHookResult.wait(
        () => renderHookResult.result.current[0].status === 'success',
        { timeout: 1000 },
    );

    return renderHookResult;
};

describe('useSwapiList hook', () => {
    it('snapshot', async () => {
        const { result, unmount } = render();
        expect(result).toMatchSnapshot();

        unmount();
    });
    it('should return data (onSuccess)', async () => {
        const { result, waitForNextUpdate, unmount } = render();

        expect(result.current[0].status).toBe('loading');
        await waitForNextUpdate();
        expect(result.current[0].status).toBe('success');

        const data = result.current[0].resolvedData;
        expect(data).not.toBe(undefined);
        if (!data) return;

        expect(data.results[0].name).toBe(
            exampleSwapiCharacterResponse[0].results[0].name,
        );

        unmount(); // necessary to avoid some 'act' warnings
    });
    it('should deliver paginated results', () =>
        act(async () => {
            const {
                result,
                unmount,
                waitForNextUpdate,
            } = await renderWithData();

            //load first result
            const data = result.current[0].resolvedData;
            expect(data).not.toBe(undefined);
            if (!data) return;
            expect(data.results[0].name).toBe(
                exampleSwapiCharacterResponse[0].results[0].name,
            );

            // change page and wait for update
            expect(result.current[1].activePage).toBe(1);
            result.current[1].nextPage();
            expect(result.current[1].activePage).toBe(2);
            await waitForNextUpdate();

            //check second result
            const secondResult = result.current[0].resolvedData;
            expect(secondResult).not.toBe(undefined);
            if (!secondResult) return;
            expect(secondResult.results[0].name).toBe(
                exampleSwapiCharacterResponse[1].results[0].name,
            );

            unmount(); // necessary to avoid some 'act' warnings
        }));
    it('should prevent fetching next results when it is last page', () =>
        act(async () => {
            const {
                result,
                waitForNextUpdate,
                unmount,
            } = await renderWithData();

            // fetch next page (second page)
            expect(result.current[1].activePage).toBe(1);
            result.current[1].nextPage();
            expect(result.current[1].activePage).toBe(2);
            await waitForNextUpdate();

            // try fetch non-existent page (third page)
            expect(result.current[1].activePage).toBe(2);
            result.current[1].nextPage();
            expect(result.current[1].activePage).toBe(2);

            unmount(); // necessary to avoid some 'act' warnings
        }));
});
