import  { render, screen } from '@testing-library/react';
import {Button} from 'shared/ui/Button/Button';
import { ThemeButton } from './Button';
describe('Button', () => {
    test('Test Render', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    })
})