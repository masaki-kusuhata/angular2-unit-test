import {Post} from './../app/models/post.model';
let testPost = {title: 'TestPost', author: 'Admin'};

describe('Post', () => {
  it('checks Post properties', () => {
    let post = new Post(testPost);
    expect(post instanceof Post).toBe(true);
    expect(post.title).toBe('TestPost');
    expect(post.author).toBe("Admin");
  });
});