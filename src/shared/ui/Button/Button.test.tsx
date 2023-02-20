import  { render, screen } from '@testing-library/react';
// import {Button} from 'shared/ui/Button/Button';
import { Button, ButtonTheme } from './Button';

describe('Button', () => {
    test('Test Render', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    })
})