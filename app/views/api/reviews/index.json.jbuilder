@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :content, :rating, :id, :user_id, :book_id

    end
end