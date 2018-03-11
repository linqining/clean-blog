class PostsController < ApplicationController
  def index
    @posts = if params[:category]
      Post.joins(:categories).where(category: {id: params[:category]})
    else

      Post.all

    end
  end

end
