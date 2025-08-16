import { Component, inject } from '@angular/core';
import { CharacterListComponent } from '../../components/dragon-ball/character-list/character-list.component';
import { DragonBallCharacterAddComponent } from '../../components/dragon-ball/dragon-ball-character-add/dragon-ball-character-add.component';
import { DragonBallService } from '../../services/dragon-ball.service';

@Component({
  selector: 'app-dragon-ball-page',
  imports: [CharacterListComponent, DragonBallCharacterAddComponent],
  templateUrl: './dragon-ball-page.component.html',
  styleUrl: './dragon-ball-page.component.css'
})
export class DragonBallPageComponent {
  dragonBallService = inject(DragonBallService);
}
