
json.extract! @review, :content, :rating, :id, :user_id
json.username @review.user.username