class Api::SessionsController < ApplicationController
    before_action :ensure_logged_in, except: [:index]

    def index
        @bookshelves = Bookshelf.all
        render json: @bookshelves
    end

    def create
        @bookshelf = Bookshelf.new(bookshelf_params)
        if @bookshelf.save

            render "api/users/user"
        end
    end

    private

  def bookshelf_params
    params.require(:bookshelf).permit(:title)
  end
end