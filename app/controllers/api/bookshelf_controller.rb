class Api::SessionsController < ApplicationController
    before_action :ensure_logged_in, except: [:index]

    def index
        @bookshelves = Bookshelf.all
        render json: @bookshelves
    end

end