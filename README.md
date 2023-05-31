# Virtual Pet

Virtual Pet is a JavaScript based game that works like Tamagotchi. Feed your pet, walk it, care for it, love it <3.

## Installation

Fork and clone the Virtual Pet repository to your local machine. Run npm install to download any dependencies.

In Node REPL, run the following commands to spawn a new pet.

## Usage

Take good care of your pet! Walk it regularly, make sure it's fed, let it grow up and adopt new pets as well. Check up on it to find out how it's feeling before anything goes wrong!

If your pet gets too hungry (hunger value exceeding 10) it will DIE.

If your pet gets too old (age 30) it will DIE.

### Commands

growUp() ages your pet 1, adds 5 hunger, and reduces their fitness by 3.

walk() improves fitness by 4 points, to a maximum of 10.

feed() reduces hunger by 3, to a minimum of 0.

checkUp() tells you if your pet is hungry, restless, both, or none!

adoptChild() lets your pet adopt a new baby. The circle of life really is wonderful.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
