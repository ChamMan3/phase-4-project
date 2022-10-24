class User < ApplicationRecord
    has_many :lists
    has_many :events, through: :lists
end
