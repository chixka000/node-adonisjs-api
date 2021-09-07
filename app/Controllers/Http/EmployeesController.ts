import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import Employee from "App/Models/Employee"
import EmployeeFormValidator from "App/Validators/EmployeeFormValidator";

export default class EmployeesController {

  private getResponseHandler(data: any, ctx: HttpContextContract) {

    let status = 200;
    let statusMessage = "success";
    let message = "";

    if (!data) {
      status = 404;
      statusMessage = "error";
      message = "No Data Found"
    }
    return ctx.response.status(status).json({
      status: statusMessage,
      message: message,
      data: !data ? null : data,
    })
  }

  public async index(ctx: HttpContextContract) {
    const employees = await Employee.all()
    this.getResponseHandler(employees, ctx)
  }

  public async view(ctx: HttpContextContract) {
    const employee = await Employee.find(ctx.params.id)
    this.getResponseHandler(employee, ctx)
  }

  public async store(ctx: HttpContextContract) {
    try {
      const payload = await ctx.request.validate(EmployeeFormValidator);

      const employee = await Employee.create(payload);

      return ctx.response
        .status(201)
        .json({ status: "success", data: employee });
    } catch (error) {
      ctx.response.json({ error: error.messages });
    }
  }

  public async update(ctx: HttpContextContract) {
    const employee = await Employee.query().where("id", ctx.params.id);

    if (!employee) {
      return ctx.response.status(404).json({
        status: "error",
        message: "No Data Found",
      });
    }
    try {
      await ctx.request.validate(EmployeeFormValidator);

      await Employee.query().where('id', ctx.params.id).update(ctx.request.body())

      const newData = await Employee.find(ctx.params.id);

      return ctx.response.status(200).json({
        status: "success",
        data: newData,
      });
    } catch (error) {
      ctx.response.badRequest(error.messages);
    }
  }

  public async destroy(ctx: HttpContextContract) {
    const employee = await Employee.findOrFail(ctx.params.id);

    if (!employee) {
      return ctx.response.status(404).json({
        status: "error",
        message: "No Data Found",
      })
    }

    await employee.delete()

    return ctx.response.status(200).json({status: "deleted"})
  }
}
