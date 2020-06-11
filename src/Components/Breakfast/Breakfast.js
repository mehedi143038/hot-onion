import React from 'react';
import fakeData from '../FakeData/FakeData';


const Breakfast = () => {
    const food = fakeData.slice(0,6);
    console.log(food);
    const num= ["mehedi","hasan","millat",3,6,2,5,3];
    console.log(num.splice(1,2,'jan','fev'))
    console.log(num);
    return (
        <div>
        <form>
        <fieldset>
          <legend>Fruit juice size</legend>
          <p>
            <input type="radio" name="size" id="size_1" value="small"/>
            <label for="size_1">Small</label>
          </p>
          <p>
            <input type="radio" name="size" id="size_2" value="medium"/>
            <label for="size_2">Medium</label>
          </p>
          <p>
            <input type="radio" name="size" id="size_3" value="large"/>
            <label for="size_3">Large</label>
          </p>
        </fieldset>
      </form>
        </div>
    );
};

export default Breakfast;