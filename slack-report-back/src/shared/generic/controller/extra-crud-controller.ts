import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiBody } from "@nestjs/swagger";
import { ExtraCrudService } from "../service";
@Controller()
export class ExtraCrudController {
    constructor(
        private readonly schemaCrudService: ExtraCrudService,
    ) {
    }

    @Get('/list/:parentId')
    async findAll(
        @Param('parentId') parentId: string
    ) {
        return await this.schemaCrudService.findAll(parentId)
    }

    @Get('/:id')
    async findOne(
        @Param('id') id: string
    ) {
        return await this.schemaCrudService.findOne(id)
    }

    @Post()
    @ApiBody({})
    async create(
        @Body() itemData: any
    ) {
        return await this.schemaCrudService.create(itemData)
    }

    @Put('/:id')
    @ApiBody({})
    async update(
        @Param('id') id: string,
        @Body() itemData: any
    ) {
        return await this.schemaCrudService.update(id, itemData)
    }

    @Delete('/:id')
    async delete(
        @Param('id') id: string
    ) {
        return await this.schemaCrudService.delete(id)
    }
}
