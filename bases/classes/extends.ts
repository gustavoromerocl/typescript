(() => {

    class Avenger {
        constructor(
            public name: string,
            public realName: string,
        ){
            console.log('Constructor Avenger llamado!')
        }

        protected getFullname() {
            return `${ this.name } ${ this.realName }`
        }

    }

    class Xmen extends Avenger {

        constructor(
            name: string,
            realName: string,
            public isMutant:boolean
        ){
            super( name, realName )
            console.log('Constructor Xmen llamado');
        }

        getFullnameDesdeXmen() {
            console.log( super.getFullname()  )
        }

    }


    // const wolverine = new Xmen('Wolverine','Logan', true)

    
    // console.log(wolverine);
    // wolverine.getFullnameDesdeXmen();


})()