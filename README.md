# 1-800-Doctorb (CodeReview6)
#### This was made as an exercise in querying a remote API and returning the results
#### Created by Peter Wells
 _Updated: 11/24/19_

## Description

>The purpose of this site is to provide a searchable front end to the BetterDoctor API. A user can input their location and either a doctor name or symptoms to get a list of applicable doctors.

## Installation

1. Clone/Download the Git Repository at: https://github.com/unfinishedideas/codereview6.git
2. Navigate to the directory with terminal (or your preferred console)
3. Create a .env in the root directory and add the line: API_KEY = [YOUR UNIQUE API KEY GOES HERE]
4. type 'npm install' to get the appropriate nodeModules
5. type 'npm run build' to build a distribution
6. open ./dist/index.html in your favorite browser

## Known Bugs

No major bugs at present

Minor thing: Having a selector switch for condition / doctor name is kind of redundant since both can be searched using the query functionality.

## Behavior Tree
User inserts their location, query and whether or not they are searching by condition and it returns a list of doctors in that area which are relevant.

| Behavior      | Input        | Output  |
| ------------- |:-------------| :-----  |
| App will take in a users search for doctors by name in their preferred area and return a list of doctors that have that name | "Portland, OR", "Wells" | Will display the doctors with that name on the page |
| App will take in a users location and search for symptoms and app will return doctors that specialize in that type of medicine | "Portland, OR", "Acne" | Will display the doctors that can help with that problem |


## Support and contact

If you have any issues viewing this site or any general questions about how to open please email me at
_PeteTheBeatWells@gmail.com_

## Technologies Used

_This site uses the following technologies_

 **HTML**
 _for construction_

 **CSS**
_for general styling_

**JavaScript**
_for back-end business logic and functionality_

**Bootstrap 4.3.1**
_for containers / grid layout / button graphics_

**jQuery-3.4.1**
_for front-end interfacing_

### License
Copyright (c) 2019 Peter Wells  
Licensed under the GPL license.
