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
        
        @review = Review.new(review_params)
        if @review.save
            # @username = @review.user.username
            # debugger
            render :show
        end
    end

    def update
        
        @review = Review.find(params[:id])
        
        if @review.update(review_params)
            render :show
        end
    end

    def destroy
        # print 'eggs'

        @review = Review.find(params[:id])
        logger.info(params)
        
        @review.destroy
        render :show
    end

    def review_params
        params.require(:review).permit(:content, :book_id, :user_id, :rating)
    end
end