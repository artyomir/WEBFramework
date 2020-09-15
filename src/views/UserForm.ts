import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onChangeNameClick,
      'click:.save-user': this.onSaveUserClick,
    };
  }

  onSaveUserClick = (): void => {
    this.model.save();
    console.log(this.model);
  };

  onChangeNameClick = (): void => {
    const input = this.parent.querySelector('input');

    if (input) {
      const name = input.value;

      this.model.set({ name });
    }
  };

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  template(): string {
    return `
      <div>
        <input placeholder="${this.model.get('name')}"/>
        <button class="set-name">Change name</button>
        <button class="set-age">Set random age</button>
        <button class="save-user">Save User</button>
      </div>
    `;
  }
}
