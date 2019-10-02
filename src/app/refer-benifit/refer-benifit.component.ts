import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refer-benifit',
  templateUrl: './refer-benifit.component.html',
  styleUrls: ['./refer-benifit.component.scss']
})
export class ReferBenifitComponent implements OnInit {
  referBenifit = [
    {
      img: './../../assets/setting1.png',
      title: 'Sign up for Hippo Video',
      points: [
        'Sign up using business account only.',
        'Add your Product Hunt referral code.',
        'Get 100 video emails credited to your account on sign up.'
      ],
      class: 'fade-orange'
    },
    {
      img: './../../assets/setting2.png',
      title: 'Refer your business contacts/friends',
      points: [
        'Refer your contacts to sign up for Hippo Video.',
        'You get additional 50 personalized video emails for every contact you refer.',        
        'Refer up to a maximum of 10 contacts.'
      ],
      class: 'fade-green'
    },
    {
      img: './../../assets/setting3.png',
      title: 'For Existing Users',
      points: [
        'Sign in with your business account and add the referral code to enjoy the benefits.'
      ],
      class: 'fade-violet'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
