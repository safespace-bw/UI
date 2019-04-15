class Team {
    constructor(domElement);
    this.domElement = domElement;
    this.expandButton = this.domElement.querySelector('.expandButton');
    this.expandButton.addEventListener('click', () => this.expandTeam());

    expandTeam() {
        this.domElement.classList.toggle('team-open');
    }
}

let teamMembers = document.querySelectorAll('.team');
teamMembers.forEach(function(teamMember){
    return new Team(teamMember);
})