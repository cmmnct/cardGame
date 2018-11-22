
export class SoundService {


	playSound(card) {
		navigator.vibrate(100);
		const soundFile = String('assets/snd/' + card.card1 + '.wav');
		const mySound = new Audio(soundFile);
		mySound.play();
	}
}

