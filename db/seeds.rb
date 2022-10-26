



u1=User.create(name: "Jake", password: "1234", email: "myemail@gmail.com")
u2=User.create(name: "Chris Tucker", password: "1234", email: "LAPD@gmail.com")
u3=User.create(name: "Roadhog", password: "1234", email: "Roadhog@gmail.com")
u4=User.create(name: "Luke", password: "password", email: "lukeemail@gmail.com")

e1=Event.create(event_type: "birthday", name:"Roadhog's birthday", time: 1130, month: 11, day: 10)
e2=Event.create(event_type: "wedding", name:"Roadhog's wedding", time: 1135, month: 12, day: 10)
e3=Event.create(event_type: "funeral", name:"Roadhog's funeral", time: 1140, month: 1, day: 10)
e4=Event.create(event_type: "memorial", name:"Roadhog's memorial", time: 1145, month: 2, day: 10)

l1=List.create(details: "I miss Roadhog 😈", user_id: u1.id, event_id: e3.id)
l2=List.create(details: "happy birthday Roadhog 🧌", user_id: u4.id, event_id: e4.id)
l3=List.create(details: "im sad about Jackie Chan 😈", user_id: u2.id, event_id: e4.id)
l4=List.create(details: "drink more water 🫵", user_id: u1.id, event_id: e4.id)

puts "done seeding 😈 "
