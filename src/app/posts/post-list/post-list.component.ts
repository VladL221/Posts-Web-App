import { Component, OnDestroy, OnInit } from "@angular/core";
import { Post } from "../post.model";
import { PostsService } from "../posts.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy{


  private postsSub: Subscription;
  posts:Post[] = [];
  isLoading = false;


constructor(public postsService: PostsService){

}
  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
  ngOnInit() {
    this.isLoading = true;
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener().subscribe((posts: Post[]) => {
      this.isLoading = false;
      this.posts = posts
    });
  }

  onDelete(postId: string){
    this.postsService.deletePost(postId);
  }


  // posts = [
  //   {title: 'First Post', content: 'This is a first post\s contect'},
  //   {title: 'Second Post', content: 'This is a second post\s contect'},
  //   {title: 'third Post', content: 'This is a third post\s contect'}
  // ];


}
