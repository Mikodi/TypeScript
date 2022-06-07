import { renderBlock } from './lib.js'
import { renderSearchFormBlock } from './search-formBlock.js'

export function renderFormBlock () {

  const date: Date = new Date();
  const minDate: string = new Date().toLocaleDateString().replace(/^(\d+).(\d+).(\d+)$/, '$3-$2-$1');
  
  const currentDay: number = date.getDate();
  const currentMonth: number = date.getMonth();

  const nextDay: number = currentDay + 1;
  const nextMonth: number = currentMonth + 2;

  const minDateIn: string = new Date(date.getFullYear(), date.getMonth(), nextDay).toLocaleDateString().replace(/^(\d+).(\d+).(\d+)$/, '$3-$2-$1');
  const minDateOut: string = new Date(date.getFullYear(), date.getMonth(), nextDay + 2).toLocaleDateString().replace(/^(\d+).(\d+).(\d+)$/, '$3-$2-$1');
  const lastDay: string = new Date(date.getFullYear(), nextMonth, 0).toLocaleDateString().replace(/^(\d+).(\d+).(\d+)$/, '$3-$2-$1');

  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${minDateIn}" min="${minDate}" max="${lastDay}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${minDateOut}" min="${minDateIn}" max="${lastDay}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button id="submit-date">Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )

  const inputIn = document.getElementById('check-in-date');
  const inputOut = document.getElementById('check-out-date');

  inputIn.onchange = () => renderSearchFormBlock(inputIn, inputOut);
  inputOut.onchange = () => renderSearchFormBlock(inputIn, inputOut);

}
