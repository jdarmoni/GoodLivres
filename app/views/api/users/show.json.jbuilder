json.partial! "api/users/user", user: @user

json.bookshelves do
  @user.bookshelves.each do |bookshelf|
    json.extract! bookshelf, :title

  end
end