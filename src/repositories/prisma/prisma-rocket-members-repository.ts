import {Injectable} from '@nestjs/common'
import {randomUUID} from 'node:crypto';
import {RocketMemberRepository} from '../rocket-members-repository';
import {PrismaService} from 'src/database/prisma.service';

@Injectable()
export class PrismaRocketMembersRepository implements RocketMemberRepository{
    constructor(private prisma: PrismaService) {}

    async create(name: string, memberFunction: string): Promise<void>{
        await this.prisma.rocketTeamMember.create({
            data: {
                id: randomUUID(),
                name,
                function: memberFunction
            }
        })
    }
}