import { fireEvent, render, screen } from "@testing-library/react";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";
import {SideBar} from './SideBar';

describe('sidebar', () => {
    test('Test render', () => {
        // renderWithTranslation(<SideBar />);
        componentRender(<SideBar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        componentRender(<SideBar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    })
})