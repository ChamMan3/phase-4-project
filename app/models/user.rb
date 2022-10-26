class User < ApplicationRecord
    has_many :lists
    has_many :events, through: :lists
    has_secure_password

    validates :password, confirmation: true
    validates :password_confirmation, presence: true

end
