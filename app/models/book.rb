class Book < ApplicationRecord 

    validates :title, :description, :author, presence: true

    
end