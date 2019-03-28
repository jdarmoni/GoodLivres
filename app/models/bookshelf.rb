class Bookshelf < ApplicationRecord 

    validates :title, presence: true

    # at some point, has many books
    belongs_to :user,
        class_name: :User,
        primary_key: :id,
        foreign_key: :user_id
end