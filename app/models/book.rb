class Book < ApplicationRecord 

    validates :title, :description, :author, presence: true

    has_many :shelvings,
        foreign_key: :book_id,
        class_name: :Shelving  

end