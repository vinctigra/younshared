import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/user';
import {Posts} from '../../../models/posts';
import {PostsService} from '../../../services/posts.service';

@Component({
  selector: 'app-profil-user',
  templateUrl: './profil-user.component.html',
  styleUrls: ['./profil-user.component.scss'],
})
export class ProfilUserComponent implements OnInit {
  user: User;
  posts: Posts[] = [];

  constructor(private serviceUser: UserService, private postService: PostsService) { }

  ngOnInit() {
    this.postService.getAllPostsByUser().subscribe(
      (response) => {
        this.posts = response;
      }
    );
    this.user = this.serviceUser.currentUser();
  }

  updateBanniere() {

  }

  updateImgProfile() {

  }
}
