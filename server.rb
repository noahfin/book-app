require "pry"
module Ang_App
  class Server < Sinatra::Base

    get "/" do
      KEY = ENV['BOOKS_KEY']
     
      # uri = URI.encode(" https://www.googleapis.com/demo/v1?key="+ key) 
      # @books = HTTParty.get(uri).to_json 

      erb :index
    end
    get "/books" do
      content_type :json
      KEY = ENV['BOOKS_KEY']
     
      uri = URI.encode("https://www.googleapis.com/books/v1/volumes?q={science fiction}?key="+ KEY) 
      @books = HTTParty.get(uri).to_json 
      erb :books
    end
   
 
  end
end
