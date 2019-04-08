class Api::ReviewsController < ApplicationController

    def index
        debugger
        # need to find a book

        @user = User.find_by(id: current_user.id)      
        debugger  
        @reviews = @user.reviews
        debugger
        render :index
    end

    def show
        @review = Review.find_by(id: params[:id])
        render :show
    end
    
    def create
    end

    def update

    end

    def destroy

    end

    def review_params
        params.require(:review).permit(:title, :book_id, :user_id, :rating)
    end
end