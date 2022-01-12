import Button from '../components/button';
import useAppDispatch from '../hooks/use-app-dispatch';
import useAppSelector from '../hooks/use-app-selector';
import { increment } from '../slices/counter';

const Counter = () => {
  const clicked = useAppSelector(({ counter }) => counter.value);
  const dispatch = useAppDispatch();

  const onClick = () => dispatch(increment());

  return (
    <>
      <span>
        Clicked {clicked} time{clicked !== 1 ? 's' : ''}
      </span>
      <Button onClick={onClick}>Button</Button>
    </>
  );
};

export default Counter;
