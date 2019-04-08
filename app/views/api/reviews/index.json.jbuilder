@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :content, :rating

    end
end