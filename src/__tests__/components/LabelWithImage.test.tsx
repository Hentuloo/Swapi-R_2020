import React from 'react';
import { render, wait } from 'tests/render';
import { LabelWithImage } from 'components/LabelWithImage';

const imageElementId = 'LabelWithImage/image';

describe('LabelWithImage component', () => {
    it('snapshot', () => {
        const { container } = render(<LabelWithImage />);
        expect(container.firstChild).toMatchSnapshot();
    });
    it('should render children components', async () => {
        const text = 'Hello world';
        const { findByText } = render(<LabelWithImage>{text}</LabelWithImage>);

        const el = await findByText(text);
        expect(el).toBeInTheDocument();
    });
    it('should render as div in default', () => {
        const { container } = render(<LabelWithImage />);

        const wrapper = container.firstChild;
        const wrapperNodeName = wrapper && wrapper.nodeName;

        expect(wrapperNodeName).toBe('DIV');
    });
    it('should render as Link', () => {
        const { container } = render(<LabelWithImage to="/" />);

        const wrapper = container.firstChild;
        const wrapperNodeName = wrapper && wrapper.nodeName;

        expect(wrapperNodeName).toBe('A');
    });
});
