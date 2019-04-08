class Review < ApplicationRecord
    validates :user_id, :content, :book_id, :rating, presence: true

    belongs_to :book,
        class_name: :Book,
        primary_key: :id,
        foreign_key: :book_id

    belongs_to :user,
        class_name: :User,
        primary_key: :id,
        foreign_key: :user_id

end