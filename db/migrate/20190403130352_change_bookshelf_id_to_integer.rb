class ChangeBookshelfIdToInteger < ActiveRecord::Migration[5.2]
  def change
    change_column :shelvings, :bookshelf_id, 'integer USING CAST(bookshelf_id AS integer)'
  end
end
