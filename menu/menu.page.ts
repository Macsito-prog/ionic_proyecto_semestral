import { Component, OnInit } from '@angular/core';
import {AnimationController, Animation} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  usuario = null
  constructor(private animationCtrl : AnimationController, private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.usuario = this.activatedRoute.snapshot.paramMap.get('id')
    const animation : Animation = this.animationCtrl.create()
    .addElement(document.querySelector('.banner'))
    .duration(4000)
    .iterations(Infinity)
    .fromTo('transform','translateX(-150px)','translateX(150px)')
    .fromTo('opacity', '1', '0.5')
    animation.play()

}
}
