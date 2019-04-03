class Book < ApplicationRecord 

    validates :title, :description, :author, presence: true

    has_many :shelvings,
        class_name: :Shelving,  
        foreign_key: :book_id
    
    has_many :bookshelves,
        through: :shelvings,
        source: :bookshelf
    
end