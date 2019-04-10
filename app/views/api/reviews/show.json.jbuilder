
json.extract! @review, :content, :rating, :id
json.username @review.user.username