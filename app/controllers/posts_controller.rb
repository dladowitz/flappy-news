class PostsController < ApplicationController
  skip_before_action :verify_authenticity_token #enable to allow outside json calls

  def index
    respond_with Post.all
  end

  def create
    respond_with Post.create(post_params)
  end

  def show
    respond_wtih Post.find params[:id]
  end

  def upvote
    post = Post.find params[:id]
    post.increment!(:upvotes)

    respond_with post
  end

  private

  def post_params
    binding.pry
    params.require(:post).permit(:title, :link)
  end
end
