var models = require('../models/index');

// describe('methods',function(){
//     var page,computedUrl;
//     beforeEach(function(){
//         page = new models.Page({title:"test1! _", tags: ["#elevator"]});
//         pageTwo = new models.Page({title:"test2! _", tags: ["#elevator", "#stairs"]});
//         pageThree = new models.Page({title:"test3! _", tags: ["#elevator", "#stairs"]}); 

//         computedUrl = page.computeUrlName(); 

//     }); 
//     describe('computeUrlName testing', function(){    
//         xit("computed url name length is greater than 0"){
//             expect(computedUrl.length).to.not.be(0); 
//         }
//         xit("check for only alphanumeric characters"){
//             expect(computedUrl.search(/\W+/)).to.below(0); 
//         }
//     })
//     describe("getSimilar testing",function(){
//         xit("when called returns three pages"){

//         }

//         xit("when called returns two pages"){

//         }


//     });
// })

// describe('virtuals', function(){
//     describe('an individual virtual', function(){
//         xit

//     })

// })

// describe('validations', function(){
//     describe('an individual validation', function(){
//         xit

//     })
// })

// describe('hooks', function(){
//     describe('an individual hook', function(){
//         xit
//     })

// })

// describe('statics', function(){
//     describe('an individual static', function(){
//         xit
//     })
// })

describe('Page Model', function() {

    describe('Validations', function() {
        var page;
        beforeEach(function() {
            page = new models.Page()
        })
        xit('should err without title', function(done) {
            page.validate(function(err) {
                expect(err.errors).to.have.property("Title");
                done()
            })
        })
        xit('should err with title of zero length', function(done) {
            page.validate(function(err) {
                expect(err.errors).to.have.property("Title");
                done()
            })

        })
        xit('should err without body', function(done) {
            expect(err.errors).to.have.property("Body");
            done()
        })
    })

    describe('Statics', function() {
        var page; 
        beforeEach(function(){
            page = new models.Page({tags:["fruit","tropical","island"]})
        })
        describe('findBytag', function() {
            xit('should get pages with the search tag', function() {})
            xit('should not get pages without the search tag', function() {})
        })
    })

    describe('Methods', function() {
        describe('computeUrlName', function() {
            xit('should convert non-word-like chars to underscores', function() {})
        })
        describe('getSimilar', function() {
            xit('should never get itself', function() {})
            xit('should get other pages with any common tags', function() {})
            xit('should not get other pages without any common tags', function() {})
        })
    })

    describe('Virtuals', function() {
        describe('full_route', function() {
            xit('should return the url_name prepended by "/wiki/"', function() {})
        })
    })

    describe('Hooks', function() {
        xit('should call computeUrlName before save', function() {})
    })

})