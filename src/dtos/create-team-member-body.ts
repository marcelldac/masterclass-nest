import {IsNotEmpty, Length} from 'class-validator';

export class CreateTeamMemberBody{
    @IsNotEmpty({
        message: 'The member NAME should not be empty.'
    })
    @Length(5,100)
    name: string;

    @IsNotEmpty({
        message: 'The member FUNCTION should not be empty.'
    })
    function: string;
}