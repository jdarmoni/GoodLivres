class Shelving < ApplicationRecord
  validates :bookshelf_id, :book_id

  belongs_to :bookshelf
  belongs_to :book

  has_one :owner,
    through :bookshelf,
    source: :user

end
