class Bookshelf < ApplicationRecord 

    validates :title, presence: true

    # at some point, has many books
    belongs_to :user,
        class_name: :User,
        primary_key: :id,
        foreign_key: :user_id

    has_many :shelvings,
        class_name: :Shelving,
        foreign_key: :bookshelf_id

    has_many :books,
        through: :shelvings,
        source: :book
end