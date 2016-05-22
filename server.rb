require "pry"
module Ang_App
  class Server < Sinatra::Base

    get "/" do
      KEY = ENV['BOOKS_KEY']
      erb :index
    end
    get "/json" do
      content_type :json
        File.read('./views/mock.json')
    end
   
    get "/books" do
      content_type :json
      KEY = ENV['BOOKS_KEY']  
      uri = URI.encode("https://www.googleapis.com/books/v1/volumes?q={eath sicence the phe physcial setting}?key="+ KEY) 
      @books = HTTParty.get(uri).to_a
      @books_json = []
      @books[2][1].each_with_index do |book, i |
        @books_json.push(book['volumeInfo'].to_json)
      end
       @books_json.to_json
      erb :books
    end

  end
end
