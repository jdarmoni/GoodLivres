class Shelving < ApplicationRecord
  validates :book_id, :bookshelf_id, presence: true

  belongs_to :book
  belongs_to :bookshelf

  has_one :owner,
    through: :bookshelf,
    source: :user

end
