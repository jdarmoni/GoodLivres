class Api::ReviewsController < ApplicationController

    def index
        # debugger
        # we already have book_id in params
        # print 'eggs'
        # debugger
            @book = Book.find_by(id: Integer(params[:bookId]))      
        # debugger  
            @reviews = @book.reviews
        # debugger
            render :index
    end

    def show
        @review = Review.find_by(id: params[:id])
        render :show
    end
    
    def create
        # print 'eggs'
        # debugger
        
        @review = Review.new(review_params)
        if @review.save
            render :show
        end
    end

    def update

    end

    def destroy
        @review = Review.find(params[:id])
        
        @review.destroy
        render :show
    end

    def review_params
        params.require(:review).permit(:content, :book_id, :user_id, :rating)
    end
end