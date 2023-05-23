// @ts-ignore
/* eslint-disable */

declare namespace API {
  type AdjustOrderChangeWarehouseCmd = {
    /** 调整单主键id */
    adjustOrderId?: string;
    /** 库存地id */
    warehouseDistrictId?: string;
    /** 仓库id */
    warehouseId?: string;
  };

  type AdjustOrderCreateCmd = {
    /** 调整类型 */
    adjustTypeCode?: string;
    /** 库存表id(列表) */
    inventoryIds?: number[];
  };

  type AdjustOrderDTO = {
    /** 调整单号 */
    adjustOrderCode?: string;
    /** 调整单主键id */
    adjustOrderId?: string;
    /** 调整原因 */
    adjustReason?: string;
    /** 调整类型(数据字典) */
    adjustTypeCode?: string;
    /** 调整类型名称 */
    adjustTypeName?: string;
    /** 创建人 */
    createBy?: string;
    /** 创建人(名称) */
    createByName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人 */
    modifyBy?: string;
    /** 修改人(名称) */
    modifyByName?: string;
    /** 修改时间 */
    modifyTime?: string;
    /** 状态 */
    statusCode?: string;
    /** 状态名称 */
    statusName?: string;
    /** 提交时间 */
    submitTime?: string;
    /** 库存地编码 */
    warehouseDistrictCode?: string;
    /** 仓库id */
    warehouseDistrictId?: string;
    /** 库存地名称 */
    warehouseDistrictName?: string;
    /** 仓库id */
    warehouseId?: string;
  };

  type AdjustOrderDetailCreateCmd = {
    /** 库存调整单表id */
    adjustOrderId?: number;
    /** 库存表id列表 */
    inventoryIds?: number[];
  };

  type AdjustOrderDetailDTO = {
    /** 调整数量 */
    adjustAmount?: string;
    /** 明细id */
    adjustOrderDetailId?: string;
    /** 主键id */
    adjustOrderId?: string;
    /** 基本单价 */
    basePrice?: number;
    /** 基本单位(数据字典) */
    baseUnit?: string;
    /** 基本单位名称 */
    baseUnitName?: string;
    /** 批次号 */
    batchNo?: string;
    /** 批次状态(数据字典) */
    batchStatusCode?: string;
    /** 批次状态名称 */
    batchStatusName?: string;
    /** 中品类 */
    categoryMedium?: string;
    /** 1：库存不存在，2.字段存在错误信息 3.正常数据 */
    dataLevel?: number;
    /** 设计号 */
    designNo?: string;
    /** 错误信息，dataLevel为2时有值，返回格式{"column1":"errorReason1","column2":"errorReason2"} */
    errorMessageMap?: Record<string, any>;
    /** 克重 */
    gramWeight?: number;
    /** 库存id */
    inventoryId?: string;
    materialCategoryCode?: string;
    /** 物料编码 */
    materialCode?: string;
    /** 物料色号编码 */
    materialColorCode?: string;
    /** 物料色号名称 */
    materialColorName?: string;
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 现有可用库存量 */
    onHandAvailableInventory?: string;
    /** 库存归属名称 */
    ownerName?: string;
    ownnerId?: string;
    plannerId?: string;
    /** 批次状态名称 */
    plannerName?: string;
    /** 系数 */
    purchaseCoefficient?: string;
    /** 采购单价 */
    purchasePrice?: string;
    /** 采购单位 */
    purchaseUnit?: string;
    /** 规格 */
    specification?: string;
    /** 库存汇总信息,生产锁定数量取sumInfo.lockedInventory */
    sumInfo?: InventorySumInfoDTO;
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
    /** 缸号 */
    vatNo?: string;
    /** 仓库编码 */
    warehouseCode?: string;
    /** 库存地编码 */
    warehouseDistrictCode?: string;
    /** 库存地名称 */
    warehouseDistrictName?: string;
    warehouseId?: string;
    /** 仓库名称 */
    warehouseName?: string;
  };
  type AllocationOrderDetailDTO = {
    /** 调拨时间 */
    allocateTime?: string;

    /** 调拨数量 */
    allocationAmount?: number;
    /** 调拨单号 */
    allocationOrderCode?: string;
    /** 库存调拨单明细id */
    allocationOrderDetailId?: number;
    /** 调拨单ID */
    allocationOrderId?: string;
    /** 调拨单类型 */
    allocationTypeCode?: string;
    /** 调拨单类型名称 */
    allocationTypeName?: string;
    /** 审批时间 */
    approveTime?: string;
    /** 基本单位 */
    baseUnit?: string;
    /** 基本单位名称 */
    baseUnitName?: string;
    /** 批次号 */
    batchNo?: string;
    /** 批次状态 */
    batchStatusCode?: string;
    /** 批次状态名称 */
    batchStatusName?: string;
    /** 创建人 */
    createBy?: string;
    /** 创建人(名称) */
    createByName?: string;
    /** 库存id */
    inventoryId?: number;
    /** 物料编码 */
    materialCode?: string;
    /** 物料颜色 */
    materialColorCode?: string;
    /** 物料颜色id（物料色号） */
    materialColorId?: string;
    /** 物料颜色 */
    materialColorName?: string;
    /** 物料id */
    materialId?: number;
    /** 物料名称 */
    materialName?: string;
    /** 备注 */
    remark?: string;
    /** 备注 */
    remarks?: Remark[];
    /** 调出设计号 */
    sourceDesignNo?: string;
    /** 调出设计号设计师名称 */
    sourceDesignNoDesignerName?: string;
    /** 来源单据id */
    sourceOrderId?: number;
    /** 调出库存地类型（库存地类型，字典值） */
    sourceWarehouseDistrictTypeCode?: string;
    /** 调出库存地类型名称（库存地类型名称） */
    sourceWarehouseDistrictTypeName?: string;
    /** 物料规格 */
    specification?: string;
    /** 状态 */
    statusCode?: string;
    /** 状态名称 */
    statusName?: string;
    /** 提交时间 */
    submitTime?: string;
    /** 调入设计号 */
    targetDesignNo?: string;
    /** 调入设计号设计师名称 */
    targetDesignNoDesignerName?: string;
    /** 调入库存地类型（库存地类型，字典值） */
    targetWarehouseDistrictTypeCode?: string;
    /** 调入库存地类型名称（库存地名类型称） */
    targetWarehouseDistrictTypeName?: string;
  };
  type AdjustOrderDetailUpdateCmd = {
    /** 调整数量 */
    adjustAmount?: string;
    /** 调整单物料明细主键id */
    adjustOrderDetailId?: string;
    /** 批次状态编码 */
    batchStatusCode?: string;
    /** 库存id */
    inventoryId?: string;
    /** 库存归属方id */
    ownnerId?: string;
    /** 采购系数 */
    purchaseCoefficient?: string;
    /** 采购单价 */
    purchasePrice?: string;
    /** 规格 */
    specification?: string;
  };

  type AdjustOrderInfoDTO = {
    /** 调整数量 */
    adjustAmount?: number;
    /** 调整单号 */
    adjustOrderCode?: string;
    /** 调整明细主键id */
    adjustOrderDetailId?: string;
    /** 调整单主键id */
    adjustOrderId?: string;
    /** 调整原因 */
    adjustReason?: string;
    /** 调整类型(数据字典) */
    adjustTypeCode?: string;
    /** 调整类型名称 */
    adjustTypeName?: string;
    /** 基本单位(数据字典) */
    baseUnit?: string;
    /** 基本单位名称 */
    baseUnitName?: string;
    /** 批次号 */
    batchNo?: string;
    /** 批次状态(数据字典) */
    batchStatusCode?: string;
    /** 批次状态名称 */
    batchStatusName?: string;
    /** 创建人 */
    createBy?: string;
    /** 创建人(名称) */
    createByName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 设计号 */
    designNo?: string;
    /** 物料编码 */
    materialCode?: string;
    /** 物料色号编码 */
    materialColorCode?: string;
    /** 物料色号id */
    materialColorId?: string;
    /** 物料色号名称 */
    materialColorName?: string;
    /** 物料id */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 修改人 */
    modifyBy?: string;
    /** 修改人(名称) */
    modifyByName?: string;
    /** 修改时间 */
    modifyTime?: string;
    /** 状态 */
    statusCode?: string;
    /** 状态名称 */
    statusName?: string;
    /** 提交时间 */
    submitTime?: string;
    /** 供应商货号 */
    supplierGoodsNo?: string;
    /** 供应商id */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
    /** 缸号 */
    vatNo?: string;
    /** 库存地编码 */
    warehouseDistrictCode?: string;
    /** 库存地id */
    warehouseDistrictId?: string;
    /** 库存地名称 */
    warehouseDistrictName?: string;
  };

  type AdjustOrderInfoQuery = {
    /** 调整单号 */
    adjustOrderCode?: string;
    /** 调整类型(数据字典) */
    adjustTypeCode?: string;
    /** 批次号 */
    batchNo?: string;
    /** 创建人 */
    createBy?: string;
    /** 当前页号（取值从1开始） */
    current?: number;
    /** 设计号 */
    designNo?: string;
    /** 物料编码 */
    materialCode?: string;
    /** 物料色号编码 */
    materialColorCode?: string;
    /** 排序设置列表 */
    orders?: Order[];
    /** 每页显示条数 */
    size?: number;
    /** 状态 */
    statusCode?: string;
    /** 状态(列表) */
    statusCodes?: string[];
    /** 提交起始时间 */
    submitTimeFrom?: string;
    /** 提交结束时间 */
    submitTimeTo?: string;
    /** 供应商货号 */
    supplierGoodsNo?: string;
    /** 供应商id */
    supplierId?: number;
    /** 库存地id */
    warehouseDistrictId?: string;
    /** 仓库名称 */
    warehouseName?: string;
  };

  type AdjustOrderUpdateCmd = {
    /** 调整单主键id */
    adjustOrderId?: string;
    /** 调整原因 */
    adjustReason?: string;
    /** 调整单-物料明细列表 */
    details?: AdjustOrderDetailUpdateCmd[];
    /** 仓库id */
    warehouseId?: string;
  };

  type AllocationOrderBatchVatDiffDTO = {
    /** 调拨单明细 */
    allocationOrderDetailDTOS?: AllocationOrderBatchVatDiffDetailDTO[];
    /** 备货申请流水号 */
    sourceOrderCode?: string;
    /** 备货申请单明细id */
    sourceOrderDetailId?: string;
    /** 调入设计号 */
    targetDesignNo?: string;
    /** 调入设计号设计师名称 */
    targetDesignNoDesignerName?: string;
  };

  type AllocationOrderBatchVatDiffDetailDTO = {
    /** 有效标记 1：禁用 0：有效 */
    activeFlag?: number;
    /** 调料设计号 */
    allocateDesignNo?: string;
    /** 调料设计师(名称) */
    allocateDesignerName?: string;
    /** 调料单号 */
    allocateOrderNo?: string;
    /** 备货年份 */
    allocateYear?: number;
    /** 调拨数量 */
    allocationAmount?: number;
    /** 调拨单号 */
    allocationOrderCode?: string;
    /** 调拨单明细id */
    allocationOrderDetailId?: string;
    /** 调拨单id */
    allocationOrderId?: string;
    /** 基本单价 */
    basePrice?: number;
    /** 基本单位 */
    baseUnit?: string;
    /** 基本单位名称 */
    baseUnitName?: string;
    /** 批次信息 */
    batch?: WarehouseBatchBaseInfoDTO;
    /** 品牌id */
    brandId?: number;
    /** 品牌名称 */
    brandName?: string;
    /** 业务明细id */
    businessDetailId?: number;
    /** 创建人 */
    createBy?: string;
    /** 创建人(名称) */
    createByName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 删除标记 1： 删除 0：未删除 */
    deleteFlag?: number;
    /** 设计号 */
    designNo?: string;
    /** 设计师(id) */
    designerId?: string;
    /** 设计师(名称) */
    designerName?: string;
    /** 入库时间 */
    entryTime?: string;
    /** 主键id */
    inventoryId?: string;
    /** 物料信息 */
    material?: MaterialBaseInfoDTO;
    /** 物料颜色信息 */
    materialColor?: MaterialColorBaseInfoDTO;
    /** 修改人 */
    modifyBy?: string;
    /** 修改人(名称) */
    modifyByName?: string;
    /** 修改时间 */
    modifyTime?: string;
    /** 在仓期 */
    onHandDays?: number;
    /** 归属方(编码) */
    ownnerCode?: string;
    /** 归属方(id) */
    ownnerId?: string;
    /** 归属方(名称) */
    ownnerName?: string;
    /** 列表缩略图 */
    picUrl?: string;
    /** 图片 */
    picUrls?: ImageDirectUrlResultDTO[];
    /** 计划方(code) */
    plannerCode?: string;
    /** 计划方(id) */
    plannerId?: string;
    /** 计划方(名称) */
    plannerName?: string;
    /** 采购系数 */
    purchaseCoefficient?: number;
    /** 调料备料单号 */
    purchaseOrderNo?: string;
    /** 采购单价 */
    purchasePrice?: number;
    /** 采购单位 */
    purchaseUnit?: string;
    /** 采购单位名称 */
    purchaseUnitName?: string;
    /** 驳回标识(0: 正常 1：已驳回) */
    rejectFlag?: number;
    /** 调拨数量 */
    remark?: string;
    /** 系列 */
    series?: string;
    /** 系列 */
    seriesName?: string;
    /** 尺码 */
    size?: string;
    /** 规格 */
    specification?: string;
    specificationCode?: string;
    /** 常备物料标识 */
    standingMaterialFlag?: string;
    /** 常备物料标识名称 */
    standingMaterialFlagName?: string;
    /** 库存汇总信息 */
    sumInfo?: InventorySumInfoDTO;
    /** 供应商信息 */
    supplier?: SupplierBaseInfoDTO;
    /** 供应商色号 */
    supplierColorNo?: string;
    /** 供应商货号 */
    supplierGoodsNo?: string;
    /** 租户ID */
    tenantId?: string;
    /** 缸号id */
    vatId?: string;
    /** 缸号 */
    vatNo?: string;
    /** 版本号 */
    version?: number;
    /** 仓库信息 */
    warehouse?: WarehouseBaseInfoDTO;
    /** 库存地编码 */
    warehouseDistrictCode?: string;
    /** 库存地id */
    warehouseDistrictId?: string;
    /** 库存地名称 */
    warehouseDistrictName?: string;
    /** 库存地类型code(数据字典) */
    warehouseDistrictTypeCode?: string;
    /** 库存地类型名称 */
    warehouseDistrictTypeName?: string;
    /** 年份 */
    year?: number;
  };

  type AllocationOrderByDesNoDTO = {
    /** 完成调拨的数量 */
    allocatedNum?: number;
    /** 请求调拨数量 */
    allocationNum?: number;
    /** 缺口数量 */
    gapNum?: number;
    /** 物料编码 */
    materialCode?: string;
    /** 物料颜色编码 */
    materialColorCode?: string;
    /** 物料颜色id */
    materialColorId?: number;
    /** 物料颜色名称 */
    materialColorName?: string;
    /** 物料id */
    materialId?: number;
    /** 规格 */
    specification?: string;
    /** 调入设计号 */
    targetDesignNo: string;
  };

  type AllocationOrderCommitCmd = {
    /** 调整单明细数据提交cmd */
    allocationOrderDetailCommitCmds?: AllocationOrderDetailCommitCmd[];
    /** 调拨单类型 */
    allocationTypeCode: string;
    /** 备注 */
    remark?: string;
    /** 来源单据id */
    sourceOrderId?: number;
    /** 调入设计号 */
    targetDesignNo: string;
    /** 调入设计号设计师id */
    targetDesignNoDesignerId: number;
    /** 调入设计号设计师名称 */
    targetDesignNoDesignerName: string;
    /** 调入库存地类型 */
    targetWarehouseDistrictTypeCode: string;
  };

  type AllocationOrderCountDTO = {
    /** 已驳回的数量 */
    rejectedCount?: number;
    /** 待审批的数量 */
    uncheckCount?: number;
    /** 待对批差的数量 */
    uncollateCount?: number;
    /** 待提交的数量 */
    unsubmitCount?: number;
  };

  type AllocationOrderCreateCmd = {
    /** 调拨类型code(数据字典) */
    allocationTypeCode?: string;
    /** 库存调拨单物料明细cmd集合 */
    detailCmds?: AllocationOrderDetailCreateCmd[];
    /** 单据类型 */
    orderTypeCode?: string;
    /** 备注 */
    remark?: string;
    /** 来源单据类型code(数据字典code: Warehouse-AllocationSourceOrderType)，如：手工创建：manual,面料调料单:fabric_allocate_manual,备货单:prepare_order  */
    sourceOrderTypeCode?: string;
    /** 调入设计号 */
    targetDesignNo?: string;
    /** 调入设计号设计师id */
    targetDesignNoDesignerId?: number;
    /** 调入设计号设计师名称 */
    targetDesignNoDesignerName?: string;
    /** 预估使用时间 */
    expectedUseDate?: string;
  };

  type AllocationOrderDetailCommitCmd = {
    /** 调拨数量 */
    allocationAmount: number;
    /** 库存id */
    inventoryId: number;
    /** 调出设计号 */
    sourceDesignNo: string;
    /** 调出设计号设计师id */
    sourceDesignNoDesignerId: number;
    /** 调出设计号设计师名称 */
    sourceDesignNoDesignerName: string;
    /** 调出库存地类型 */
    sourceWarehouseDistrictTypeCode: string;
  };

  type AllocationOrderDetailCreateCmd = {
    /** 调拨数量 */
    allocationAmount?: number;
    /** 现有可用库存量 */
    availableInventory?: number;
    /** 基本单位(sap调拨时传) */
    baseUnit?: string;
    /** 库存id */
    inventoryId?: number;
    /** 物料编码 */
    materialCode?: string;
    /** 物料色号编码(sap调拨时传) */
    materialColorCode?: string;
    /** 物料id */
    materialId?: number;
    /** 调料备料单号(scp)/外部采购单号（sap） */
    purchaseOrderNo?: string;
    /** 最新质检结果 */
    qualityLasestResult?: string;
    /** 质检结果有效期 */
    qualityResultExpireTime?: string;
    /** 备注 */
    remark?: string;
    /** sap库存id */
    sapInventoryId?: string;
    /** 设计号 */
    sourceDesignNo: string;
    /** 调出设计师id */
    sourceDesignNoDesignerId: number;
    /** 调出设计号设计师名称 */
    sourceDesignNoDesignerName: string;
    /** 规格编码(sap调拨时传) */
    specificationCode?: string;
    /** 缸号(sap调拨时传) */
    vatNo?: string;
    /** 库存地id */
    warehouseDistrictId: number;
  };

  type AllocationOrderDetailHeadDTO = {
    /** 调拨单号 */
    allocationOrderCode?: string;
    /** 调拨单明细 */
    allocationOrderDetailDTOS?: WarehouseInventoryAllocationInfoDTO[];
    /** 调拨单id */
    allocationOrderId?: number;
    /** 调拨类型 */
    allocationTypeCode?: string;
    /** 调拨类型名称 */
    allocationTypeName?: string;
    /** 审批时间 */
    approveTime?: string;
    createBy?: number;
    /** 创建人 */
    createName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 单据类型code */
    orderTypeCode?: string;
    /** 单据类型名称 */
    orderTypeCodeName?: string;
    /** 备注 */
    remark?: string;
    /** 调出设计号 */
    sourceDesignNo?: string;
    /** 调出设计号设计师id */
    sourceDesignNoDesignerId?: number;
    /** 调出设计号设计师名称 */
    sourceDesignNoDesignerName?: string;
    /** 调出库存地id */
    sourceWarehouseDistrictId?: number;
    /** 调出库存地名称 */
    sourceWarehouseDistrictName?: number;
    /** 调入设计号 */
    targetDesignNo?: string;
    /** 调入设计号设计师Id */
    targetDesignNoDesignerId?: number;
    /** 调入设计号设计师名称 */
    targetDesignNoDesignerName?: string;
    /** 调入库存地id */
    targetWarehouseDistrictId?: number;
    /** 调入库存地名称 */
    targetWarehouseDistrictName?: string;
  };

  type AllocationOrderDetailUpdateCmd = {
    /** 调拨数量 */
    allocationAmount?: number;
    /** 调拨单明细id */
    allocationOrderDetailId?: number;
    /** 备注 */
    remark?: string;
  };

  type AllocationOrderFlowCmd = {
    /** 调拨单ids */
    allocationOrderIds?: number[];
    /** 拒绝原因 */
    rejectReason?: string;
    /** 操作状态 */
    statusEnum: 'PASS' | 'REJECT' | 'RETURN' | 'TO_APPROVE' | 'UNSUBMIT';
  };

  type AllocationOrderResultDTO = {
    /** 实际调拨数量 */
    allocationActualAmount?: number;
    /** 调拨需求数 */
    allocationDemandAmount?: number;
    /** 调拨单号 */
    allocationOrderCode?: string;
    /** 调拨单ID */
    allocationOrderId?: string;
    /** 调拨类型code */
    allocationTypeCode?: string;
    /** 调拨类型名称 */
    allocationTypeName?: string;
    /** 审批时间 */
    approveTime?: string;
    /** 批差缸差标识(0: 无批差缸差 1：待核对批差缸差 2：已核对) */
    batchVatDiffFlag?: number;
    /** 创建人 */
    createBy?: string;
    /** 创建人(名称) */
    createByName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 物料类型code */
    materialCategoryCode?: string;
    /** 物料类型名称 */
    materialCategoryName?: string;
    /** 物料编码 */
    materialCode?: string;
    /** 物料名称 */
    materialName?: string;
    /** 单据类型code */
    orderTypeCode?: string;
    /** 单据类型名称 */
    orderTypeName?: string;
    /** 采购部门id */
    purchaseDeptId?: string;
    /** 采购部门名称 */
    purchaseDeptName?: string;
    /** 驳回标识(0: 正常 1：部分驳回 2：全部驳回) */
    rejectFlag?: number;
    /** 备注 */
    remark?: string;
    /** 调出设计号 */
    sourceDesignNo?: string;
    /** 调出设计号设计师名称 */
    sourceDesignNoDesignerName?: string;
    /** 来源单据code(比如DM单编码) */
    sourceOrderCode?: string;
    /** 来源单据明细id(比如DM单行id) */
    sourceOrderDetailId?: string;
    /** 调出库存地id */
    sourceWarehouseDistrictId?: number;
    /** 调出库存地名称 */
    sourceWarehouseDistrictName?: string;
    /** 状态 */
    statusCode?: string;
    /** 状态名称 */
    statusName?: string;
    /** 提交时间 */
    submitTime?: string;
    /** 调入设计号 */
    targetDesignNo?: string;
    /** 调入设计号设计师名称 */
    targetDesignNoDesignerName?: string;
    /** 调入库存地id */
    targetWarehouseDistrictId?: number;
    /** 调入库存地名称 */
    targetWarehouseDistrictName?: string;
  };

  type AllocationOrderResultDTO = {
    /** 实际调拨数量 */
    allocationActualAmount?: number;
    /** 调拨需求数 */
    allocationDemandAmount?: number;
    /** 调拨单号 */
    allocationOrderCode?: string;
    /** 调拨单ID */
    allocationOrderId?: string;
    /** 调拨类型code */
    allocationTypeCode?: string;
    /** 调拨类型名称 */
    allocationTypeName?: string;
    /** 审批时间 */
    approveTime?: string;
    createBy?: number;
    /** 创建人 */
    createName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 单据类型code */
    orderTypeCode?: string;
    /** 单据类型名称 */
    orderTypeCodeName?: string;
    /** 备注 */
    remark?: string;
    /** 调出设计号 */
    sourceDesignNo?: string;
    /** 调出设计号设计师id */
    sourceDesignNoDesignerId?: number;
    /** 调出设计号设计师名称 */
    sourceDesignNoDesignerName?: string;
    /** 调出库存地id */
    sourceWarehouseDistrictId?: number;
    /** 调出库存地名称 */
    sourceWarehouseDistrictName?: string;
    /** 调入设计号 */
    targetDesignNo?: string;
    /** 调入设计号设计师Id */
    targetDesignNoDesignerId?: number;
    /** 调入设计号设计师名称 */
    targetDesignNoDesignerName?: string;
    /** 调入库存地id */
    targetWarehouseDistrictId?: number;
    /** 调入库存地名称 */
    targetWarehouseDistrictName?: string;
  };

  type AllocationOrderDetailUpdateCmd = {
    /** 调拨数量 */
    allocationAmount?: number;
    /** 调拨单明细id */
    allocationOrderDetailId?: number;
    /** 备注 */
    remark?: string;
  };

  type AllocationOrderFlowCmd = {
    /** 调拨单ids */
    allocationOrderIds?: number[];
    /** 拒绝原因 */
    rejectReason?: string;
    /** 操作状态 */
    statusEnum: 'PASS' | 'REJECT' | 'RETURN' | 'TO_APPROVE' | 'UNSUBMIT';
  };

  type AllocationOrderResultDTO = {
    /** 实际调拨数量 */
    allocationActualAmount?: number;
    /** 调拨需求数 */
    allocationDemandAmount?: number;
    /** 调拨单号 */
    allocationOrderCode?: string;
    /** 调拨单ID */
    allocationOrderId?: string;
    /** 调拨类型code */
    allocationTypeCode?: string;
    /** 调拨类型名称 */
    allocationTypeName?: string;
    /** 审批时间 */
    approveTime?: string;
    /** 创建人 */
    createBy?: string;
    /** 创建人(名称) */
    createByName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 物料类型code */
    materialCategoryCode?: string;
    /** 物料类型名称 */
    materialCategoryName?: string;
    /** 物料编码 */
    materialCode?: string;
    /** 物料名称 */
    materialName?: string;
    /** 单据类型code */
    orderTypeCode?: string;
    /** 单据类型名称 */
    orderTypeName?: string;
    /** 采购部门id */
    purchaseDeptId?: string;
    /** 采购部门名称 */
    purchaseDeptName?: string;
    /** 驳回标识(0: 正常 1：部分驳回 2：全部驳回) */
    rejectFlag?: number;
    /** 备注 */
    remark?: string;
    /** 调出设计号 */
    sourceDesignNo?: string;
    /** 调出设计号设计师名称 */
    sourceDesignNoDesignerName?: string;
    /** 来源单据code(比如DM单编码) */
    sourceOrderCode?: string;
    /** 来源单据明细id(比如DM单行id) */
    sourceOrderDetailId?: string;
    /** 调出库存地id */
    sourceWarehouseDistrictId?: number;
    /** 调出库存地名称 */
    sourceWarehouseDistrictName?: string;
    /** 状态 */
    statusCode?: string;
    /** 状态名称 */
    statusName?: string;
    /** 提交时间 */
    submitTime?: string;
    /** 调入设计号 */
    targetDesignNo?: string;
    /** 调入设计号设计师名称 */
    targetDesignNoDesignerName?: string;
    /** 调入库存地id */
    targetWarehouseDistrictId?: number;
    /** 调入库存地名称 */
    targetWarehouseDistrictName?: string;
  };

  type AllocationOrderSharedBatchCmd = {
    /** 共享库存调拨单cmd集合 */
    sharedCmds?: AllocationOrderSharedCmd[];
  };

  type AllocationOrderSharedCmd = {
    /** 调拨数量 */
    allocationAmount: number;
    /** 批次id */
    batchId?: number;
    /** 批次号 */
    batchNo?: string;
    /** 物料编码 */
    materialCode?: string;
    /** 物料颜色编码 */
    materialColorCode?: string;
    /** 物料颜色id */
    materialColorId?: number;
    /** 物料颜色名称 */
    materialColorName?: string;
    /** 物料id */
    materialId?: number;
    /** 库存归属方 */
    ownnerId?: number;
    /** 库存计划方 */
    plannerId?: number;
    /** 备注 */
    remark?: string;
    /** 规格 */
    specification?: string;
    /** 调入设计号 */
    targetDesignNo: string;
    /** 缸号id */
    vatId?: number;
    /** 缸号 */
    vatNo?: string;
  };

  type AllocationOrderUpdateCmd = {
    /** 调拨单id */
    allocationOrderId?: number;
    /** 物料明细列表 */
    orderDetailList?: AllocationOrderDetailUpdateCmd[];
    /** 备注 */
    remark?: string;
    /** 预估使用时间 */
    expectedUseDate?: string;
  };

  type ImageDirectUrlResultDTO = {
    /** 文件ID */
    fileId?: string;
    /** 文件名 */
    fileName?: string;
    /** 图片规格编码 */
    imageSpecCode?: string;
    /** 文件下载URL */
    url?: string;
  };

  type InventoryAllocationOrderPageInfoQuery = {
    /** 调拨单号 */
    allocationOrderCode?: string;
    /** 批量调拨单ids */
    allocationOrderIds?: number[];
    /** 调拨类型 */
    allocationTypeCode?: string;
    /** 数据权限部门id列表 */
    businessDeptIds?: number[];
    /** 关联业务单据类型 */
    businessType?: string;
    /** 提交时间从 */
    commitTimeFrom?: string;
    /** 提交时间至 */
    commitTimeTo?: string;
    /** 创建人 */
    createBy?: string;
    /** 当前页号（取值从1开始） */
    current?: number;
    /** 管理页标识 */
    manageFlag?: string;
    /** 物料编码 */
    materialCode?: string;
    /** 单据类型 */
    orderTypeCode?: string;
    /** 排序设置列表 */
    orders?: Order[];
    /** 采购部门id */
    purchaseDeptIds?: number[];
    /** 已驳回 */
    rejected?: string;
    /** 每页显示条数 */
    size?: number;
    /** 调出设计号 */
    sourceDesignNo?: string;
    /** 调出设计号设计师id */
    sourceDesignNoDesignerId?: number;
    /** 调出设计号设计师id */
    sourceDesignNoDesignerIds?: number[];
    /** 调出设计号设计师名称 */
    sourceDesignNoDesignerName?: string;
    /** 来源单据id */
    sourceOrderId?: number;
    /** 调出库存地id */
    sourceWarehouseDistrictIds?: number[];
    /** 调拨单状态code */
    statusCode?: string;
    /** 调拨单状态codes */
    statusCodes?: string[];
    /** 调入设计号 */
    targetDesignNo?: string;
    /** 调入设计号设计师Id */
    targetDesignNoDesignerId?: number;
    /** 调入设计号设计师名称 */
    targetDesignNoDesignerName?: string;
    /** 调入库存地id */
    targetWarehouseDistrictIds?: number[];
    /** 租户ID */
    tenantId?: number;
    /** 待审批 */
    uncheck?: string;
    /** 待对批差 */
    uncollate?: string;
    /** 待提交 */
    unsubmit?: string;
  };

  type InventoryAvailableSharedCountQuery = {
    /** 品牌id */
    brandId: string;
    /** 物料编码 */
    materialCode: string;
    /** 物料色号编码 */
    materialColorCode: string;
    /** 归属方 */
    ownnerId: string;
  };

  type InventoryDetail = {
    /** 明细类型code(数据字典) */
    detailTypeCode: string;
    /** 库存数量 */
    inventory: number;
    /** 库存类型code(数据字典) */
    inventoryTypeCode: string;
  };

  type InventoryGroupCreateCmd = {
    /** 有效标记 1：禁用 0：有效 */
    activeFlag?: number;
    /** 上市单号字典code */
    arrivalCode?: string;
    /** 品牌id */
    brandId?: string;
    /** 品类code */
    categoryCode?: string;
    categoryId: number;
    /** 设计师id */
    designerId?: number;
    /** 月份 */
    month?: string;
    /** 订单属性code */
    orderAttributeCode?: string;
    /** 计算使用时间 */
    plannedUseTime?: string;
    /** 备注 */
    remark?: string;
    /** 储备类型code */
    reserveTypeCode?: string;
    /** 季节code */
    seasonCode?: string;
    /** 系列code */
    seriesCode?: string;
    /** 风格code */
    styleCode?: string;
    /** 年份 */
    year?: string;
  };

  type InventoryGroupDTO = {
    /** 有效标记 1：禁用 0：有效 */
    activeFlag?: number;
    /** 状态 */
    activeStatus?: string;
    /** 上市单号字典code */
    arrivalCode?: string;
    /** 上市单号名称 */
    arrivalName?: string;
    /** 品牌code */
    brandCode?: string;
    /** 品牌id */
    brandId?: string;
    /** 品牌名称 */
    brandName?: string;
    /** 品类code */
    categoryCode?: string;
    /** 品类id */
    categoryId?: string;
    /** 品类code名称 */
    categoryName?: string;
    /** 设计师id */
    designerId?: string;
    /** 设计师名称 */
    designerName?: string;
    /** 库存组编号 */
    inventoryGroupCode?: string;
    /** 主键id */
    inventoryGroupId?: string;
    /** 月份 */
    month?: string;
    /** 月份名称 */
    monthName?: string;
    /** 订单属性code */
    orderAttributeCode?: string;
    /** 订单属性名称 */
    orderAttributeName?: string;
    /** 计划使用时间 */
    plannedUseTime?: string;
    /** 备注 */
    remark?: string;
    /** 储备类型code */
    reserveTypeCode?: string;
    /** 储备类型名称 */
    reserveTypeName?: string;
    /** 季节code */
    seasonCode?: string;
    /** 季节code名称 */
    seasonName?: string;
    /** 系列code */
    seriesCode?: string;
    /** 系列名称 */
    seriesName?: string;
    /** 风格code */
    styleCode?: string;
    /** 风格code名称 */
    styleName?: string;
    /** 年份 */
    year?: string;
    /** 年份名称 */
    yearName?: string;
  };

  type InventoryGroupQuery = {
    /** 有效标记 1：禁用 0：有效 */
    activeFlag?: number;
    /** 上市单号字典code */
    arrivalCode?: string;
    /** 品牌id */
    brandId?: string;
    /** 品类id */
    categoryId?: number;
    /** 当前页号（取值从1开始） */
    current?: number;
    /** 设计师id */
    designerId?: number;
    /** 库存组编号 */
    inventoryGroupCode?: string;
    /** 批量主键id */
    inventoryGroupIds?: number[];
    /** 排序设置列表 */
    orders?: Order[];
    /** 储备类型code */
    reserveTypeCode?: string;
    /** 每页显示条数 */
    size?: number;
    year?: number;
  };

  type InventoryGroupUpdateCmd = {
    /** 有效标记 1：禁用 0：有效 */
    activeFlag?: number;
    /** 上市单号code(数据字典) */
    arrivalCode?: string;
    /** 品牌id */
    brandId?: string;
    /** 品类code(数据字典) */
    categoryCode?: string;
    /** 品类id */
    categoryId?: string;
    /** 设计师id */
    designerId?: string;
    /** 库存组主键id */
    inventoryGroupId?: string;
    /** 月份 */
    month?: string;
    /** 订单属性code(数据字典) */
    orderAttributeCode?: string;
    /** 计划使用时间 */
    plannedUseTime?: string;
    /** 备注 */
    remark?: string;
    /** 储备类型code(数据字典) */
    reserveTypeCode?: string;
    /** 季节code(数据字典) */
    seasonCode?: string;
    /** 系列code(数据字典) */
    seriesCode?: string;
    /** 风格code(数据字典) */
    styleCode?: string;
    /** 年份 */
    year?: string;
  };

  type InventoryGroupUpdateDTO = {
    /** 有效标记 1：禁用 0：有效 */
    activeFlag?: number;
    /** 上市单号code(数据字典) */
    arrivalCode?: string;
    /** 品牌id */
    brandId?: string;
    /** 品类code(数据字典) */
    categoryCode?: string;
    /** 品类id */
    categoryId?: string;
    /** 设计师id */
    designerId?: string;
    /** 库存组编号 */
    inventoryGroupCode?: string;
    /** 库存组主键id */
    inventoryGroupId?: string;
    /** 月份 */
    month?: number;
    /** 订单属性code(数据字典) */
    orderAttributeCode?: string;
    /** 计划使用时间 */
    plannedUseTime?: string;
    /** 备注 */
    remark?: string;
    /** 储备类型code(数据字典) */
    reserveTypeCode?: string;
    /** 季节code(数据字典) */
    seasonCode?: string;
    /** 系列code(数据字典) */
    seriesCode?: string;
    /** 风格code(数据字典) */
    styleCode?: string;
    /** 年份 */
    year?: number;
  };

  type InventoryInnerDetail = {
    /** 明细类型code(数据字典) */
    detailTypeCode: string;
    /** 库存数量 */
    inventory: number;
    /** 库存类型code(数据字典) */
    inventoryTypeCode: string;
  };

  type InventoryLockDTO = {
    /** 库存id */
    inventoryId?: number;
    /** 锁定的目标类型 */
    lockTargetTypes?:
      | 'ONHAND_AVAILABLE'
      | 'ONHAND_DESIGN_NO'
      | 'ONHAND_LOCKED'
      | 'ONHAND_SHARED'
      | 'SCHEDULED_AVAILABLE'
      | 'SCHEDULED_DESIGN_NO'
      | 'SCHEDULED_LOCKED'
      | 'SCHEDULED_SHARED'[];
    /** 已锁定数量 */
    lockedCount?: string;
  };

  type InventoryQCReturnCmd = {
    /** 库存id */
    inventoryId?: string;
    /** 退货数量 */
    returnCount?: string;
    /** 来源单据ID */
    sourceBillId?: string;
  };

  type InventorySumInfoDTO = {
    /** 现有可用库存量 */
    availableInventory?: number;
    /** 现有设计号库存 */
    designNoInventory?: number;
    /** 库存id */
    inventoryId?: string;
    /** 现有锁定库存 */
    lockedInventory?: number;
    /** 现有可用库存量 */
    onHandAvailableInventory?: number;
    /** 现有库存量 */
    onHandInventory?: number;
    /** 现有提剩锁定库存 */
    onHandPickUpLockedInventory?: number;
    /** 现有生产锁定库存 */
    onHandProduceLockedInventory?: number;
    /** 预计设计号库存 */
    scheduledDesignNoInventory?: number;
    /** 预计入库量 */
    scheduledInventory?: number;
    /** 预计锁定库存（预计生产锁定） */
    scheduledLockedInventory?: number;
    /** 预计共享库存 */
    scheduledSharedInventory?: number;
    /** 现有共享库存 */
    sharedInventory?: number;
    /** 设计号库存汇总 */
    sumDesignNoInventory?: number;
  };

  type InvtInventoryMoveHistoryQuery = {
    /** 批次号 */
    batchNo?: string;
    /** 当前页号（取值从1开始） */
    current?: number;
    /** 设计号 */
    designNo?: string;
    /** 设计师Id */
    designerId?: number;
    /** 物料编码 */
    materialCode?: string;
    /** 物料色号 */
    materialColorCode?: string;
    /** 物料id */
    materialId?: number;
    /** 物料ids */
    materialIds?: number[];
    /** 主键id */
    moveHistoryIds?: number[];
    /** 移动时间自 */
    moveTimeFrom?: string;
    /** 移动时间至 */
    moveTimeTo?: string;
    /** 移动类型 */
    moveTypeCodes?: string[];
    /** 排序设置列表 */
    orders?: Order[];
    /** 关联单据号 */
    refOrderCode?: string;
    /** 系列 */
    series?: string[];
    /** 每页显示条数 */
    size?: number;
    /** 供应商色号 */
    supplierColorNo?: string;
    /** 供应商货号 */
    supplierGoodsNo?: string;
    /** 批量供应商id */
    supplierIds?: number[];
    /** 调入仓库类型 */
    warehouseTypeCodeAfter?: string[];
    /** 调出仓库类型 */
    warehouseTypeCodeBefore?: string[];
    /** 年份 */
    years?: number[];
  };

  type InvtInventoryMoveHistoryWebDTO = {
    /** 有效标记 1：禁用 0：有效 */
    activeFlag?: number;
    /** 可用库存量 */
    availableInventory?: number;
    /** 可用库存量 移动后 */
    availableInventoryAfter?: number;
    /** 可用库存量 移动前 */
    availableInventoryBefore?: number;
    /** 基本单价-移动后 */
    basePriceAfter?: number;
    /** 基本单位-移动后 */
    baseUnitAfter?: string;
    /** 基本单位-移动后 */
    baseUnitNameAfter?: string;
    /** 批次号-移动后 */
    batchNoAfter?: string;
    /** 品牌id */
    brandId?: string;
    /** 品牌 */
    brandName?: string;
    /** Color色 */
    color?: string;
    /** 创建人 */
    createBy?: string;
    /** 创建人 */
    createByName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 删除标记 null：删除 0：未删除  */
    deleteFlag?: number;
    /** 设计号-移动后 */
    designNoAfter?: string;
    /** 调入设计号 */
    designNoIn?: string;
    /** 设计号库存 */
    designNoInventory?: number;
    /** 设计号库存 移动后 */
    designNoInventoryAfter?: number;
    /** 设计号库存 移动前 */
    designNoInventoryBefore?: number;
    /** 调出设计号 */
    designNoOut?: string;
    /** 设计师id */
    designerId?: string;
    /** 设计师 */
    designerName?: string;
    /** 出入标识(0: 出，1：入) */
    inOutFlag?: number;
    /** 库存明细-移动后 */
    inventoryDetailAfter?: string;
    /** 库存明细-移动前 */
    inventoryDetailBefore?: string;
    /** 库存id-移动后 */
    inventoryIdAfter?: string;
    /** 现有锁定库存 */
    lockedInventory?: number;
    /** 现有锁定库存 移动后 */
    lockedInventoryAfter?: number;
    /** 现有锁定库存 移动前 */
    lockedInventoryBefore?: number;
    /** 物料编码-移动后 */
    materialCodeAfter?: string;
    /** 物料色号编码-移动后 */
    materialColorCodeAfter?: string;
    /** 物料色号id-移动后 */
    materialColorIdAfter?: string;
    /** 物料色号名称-移动后 */
    materialColorNameAfter?: string;
    /** 物料id-移动后 */
    materialIdAfter?: string;
    /** 物料名称 */
    materialName?: string;
    /** 物料类型 */
    materialType?: string;
    /** 物料类型 */
    materialTypeName?: string;
    /** 修改人 */
    modifyBy?: string;
    /** 修改时间 */
    modifyTime?: string;
    /** 移动记录编号 */
    moveHistoryCode?: string;
    /** 主键id */
    moveHistoryId?: string;
    /** 移动记录年度 */
    moveHistoryYear?: string;
    /** 库存移动原因 */
    moveReason?: string;
    /** 库存移动类型 */
    moveTypName?: string;
    /** 库存移动类型code(数据字典) */
    moveTypeCode?: string;
    /** 现有库存总数 */
    onHandInventory?: number;
    /** 现有库存总数 移动后 */
    onHandInventoryAfter?: number;
    /** 现有库存总数 移动前 */
    onHandInventoryBefore?: number;
    /** 提剩锁定 */
    onHandPickUpLockedInventory?: number;
    /** 提剩锁定 移动后 */
    onHandPickUpLockedInventoryAfter?: number;
    /** 提剩锁定 移动前 */
    onHandPickUpLockedInventoryBefore?: number;
    /** 生产锁定 */
    onHandProduceLockedInventory?: number;
    /** 生产锁定 移动后 */
    onHandProduceLockedInventoryAfter?: number;
    /** 生产锁定 移动前 */
    onHandProduceLockedInventoryBefore?: number;
    /** 归属方-移动后 */
    ownnerIdAfter?: string;
    /** 归属方-移动后 */
    ownnerNameAfter?: string;
    /** 调入库存归属 */
    ownnerNameIn?: string;
    /** 调出库存归属 */
    ownnerNameOut?: string;
    /** 潘通色 */
    pantone?: string;
    /** 计划方-移动后 */
    plannerIdAfter?: string;
    /** 计划方-移动后 */
    plannerNameAfter?: string;
    /** 采购系数-移动后 */
    purchaseCoefficientAfter?: number;
    /** 采购单价-移动后 */
    purchasePriceAfter?: number;
    /** 采购单位-移动后 */
    purchaseUnitAfter?: string;
    /** 采购单位-移动后 */
    purchaseUnitNameAfter?: string;
    /** 关联id  (1个业务操作对应多条记录) */
    refId?: string;
    /** 关联单据号 */
    refOrderCode?: string;
    /** 关联单据行号 */
    refOrderDetailCode?: string;
    /** 关联单据行id */
    refOrderDetailId?: string;
    /** 关联单据id */
    refOrderId?: string;
    /** 备注 */
    remark?: string;
    /** 预计设计号库存 */
    scheduledDesignNoInventory?: number;
    /** 预计设计号库存 移动后 */
    scheduledDesignNoInventoryAfter?: number;
    /** 预计设计号库存 移动前 */
    scheduledDesignNoInventoryBefore?: number;
    /** 预计入库总数 */
    scheduledInventory?: number;
    /** 预计入库总数 移动后 */
    scheduledInventoryAfter?: number;
    /** 预计入库总数 移动前 */
    scheduledInventoryBefore?: number;
    /** 预计生产锁定 */
    scheduledLockedInventory?: number;
    /** 预计生产锁定 移动后 */
    scheduledLockedInventoryAfter?: number;
    /** 预计生产锁定 移动前 */
    scheduledLockedInventoryBefore?: number;
    /** 预计共享库存 */
    scheduledSharedInventory?: number;
    /** 预计共享库存 移动后 */
    scheduledSharedInventoryAfter?: number;
    /** 预计共享库存 移动前 */
    scheduledSharedInventoryBefore?: number;
    /** 系列 */
    series?: string;
    /** 系列 */
    seriesName?: string;
    /** 共享库存 */
    sharedInventory?: number;
    /** 共享库存 移动后 */
    sharedInventoryAfter?: number;
    /** 共享库存 移动前 */
    sharedInventoryBefore?: number;
    /** 规格-移动后 */
    specificationAfter?: string;
    /** 标准颜色 */
    standColor?: string;
    /** 标准颜色色号 */
    standColorNumber?: string;
    /** 供应商色号-移动后 */
    supplierColorNoAfter?: string;
    /** 供应商货号-移动后 */
    supplierGoodsNoAfter?: string;
    /** 供应商id-移动后 */
    supplierIdAfter?: string;
    /** 供应商id-移动后 */
    supplierNameAfter?: string;
    /** 租户ID */
    tenantId?: string;
    /** 缸号-移动后 */
    vatNoAfter?: string;
    /** 版本号 */
    version?: number;
    /** 仓库编码-移动后 */
    warehouseCodeAfter?: string;
    /** 库存地编码-移动后 */
    warehouseDistrictCodeAfter?: string;
    /** 调入库存地编码 */
    warehouseDistrictCodeIn?: string;
    /** 调出库存地编码 */
    warehouseDistrictCodeOut?: string;
    /** 库存地id-移动后 */
    warehouseDistrictIdAfter?: string;
    /** 库存地id-移动后 */
    warehouseDistrictNameAfter?: string;
    /** 调入库存地名称 */
    warehouseDistrictNameIn?: string;
    /** 调出库存地名称 */
    warehouseDistrictNameOut?: string;
    /** 仓库id-移动后 */
    warehouseIdAfter?: string;
    /** 仓库类型code */
    warehouseTypeCode?: string;
    /** 仓库类型 */
    warehouseTypeName?: string;
    /** 调入仓库类型 */
    warehouseTypeNameIn?: string;
    /** 调出仓库类型 */
    warehouseTypeNameOut?: string;
    /** 年份 */
    year?: number;
  };

  type InvtInventorySupplierMoveHistoryQuery = {
    /** 批次号 */
    batchNo?: string;
    /** 批次状态 */
    batchStatusCode?: string;
    /** 批次状态 */
    batchStatusCodes?: string[];
    /** 品牌 */
    brandIds?: number[];
    /** 当前页号（取值从1开始） */
    current?: number;
    /** 设计号 */
    designNo?: string;
    /** 设计师Id */
    designerId?: number;
    /** 在仓期（天）始 */
    inWarehouseDayFrom?: number;
    /** 在仓期（天） 至 */
    inWarehouseDayTo?: number;
    /** 物料编码 */
    materialCode?: string;
    /** 物料色号 */
    materialColorCode?: string;
    /** 物料名称 */
    materialColorNames?: string[];
    /** 物料id */
    materialId?: number;
    /** 物料ids */
    materialIds?: number[];
    /** 主键id */
    moveHistoryIds?: number[];
    /** 移动时间自 */
    moveTimeFrom?: string;
    /** 移动时间至 */
    moveTimeTo?: string;
    /** 移动类型 */
    moveTypeCodes?: string[];
    /** 排序设置列表 */
    orders?: Order[];
    /** 库存归属 */
    ownnerId?: number;
    /** 库存归属 */
    ownnerIds?: number[];
    /** 计划库存方 */
    plannerId?: number;
    /** 计划库存方 */
    plannerIds?: number[];
    /** 关联单据号 */
    refOrderCode?: string;
    /** 系列 */
    series?: string[];
    /** 每页显示条数 */
    size?: number;
    /** 供应商色号 */
    supplierColorNo?: string;
    /** 供应商货号 */
    supplierGoodsNo?: string;
    /** 批量供应商id */
    supplierIds?: number[];
    /** 租户id */
    tenantId?: number;
    /** 库存地名称 */
    warehouseDistrictIds?: string[];
    /** 调入仓库类型 */
    warehouseTypeCodeAfter?: string[];
    /** 调出仓库类型 */
    warehouseTypeCodeBefore?: string[];
    /** 年份 */
    years?: number[];
  };

  type InvtInventorySupplierMoveHistoryWebDTO = {
    /** 有效标记 1：禁用 0：有效 */
    activeFlag?: number;
    /** 可用库存量 */
    availableInventory?: number;
    /** 可用库存量 移动后 */
    availableInventoryAfter?: number;
    /** 可用库存量 移动前 */
    availableInventoryBefore?: number;
    /** 基本单价-移动后 */
    basePriceAfter?: number;
    /** 基本单位-移动后 */
    baseUnitAfter?: string;
    /** 基本单位-移动后 */
    baseUnitNameAfter?: string;
    /** 批次号-移动后 */
    batchNoAfter?: string;
    /** 品牌id */
    brandId?: string;
    /** 品牌 */
    brandName?: string;
    /** Color色 */
    color?: string;
    /** 创建人 */
    createBy?: string;
    /** 创建人 */
    createByName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 删除标记 null：删除 0：未删除  */
    deleteFlag?: number;
    /** 设计号-移动后 */
    designNoAfter?: string;
    /** 调入设计号 */
    designNoIn?: string;
    /** 设计号库存 */
    designNoInventory?: number;
    /** 设计号库存 移动后 */
    designNoInventoryAfter?: number;
    /** 设计号库存 移动前 */
    designNoInventoryBefore?: number;
    /** 调出设计号 */
    designNoOut?: string;
    /** 设计师id */
    designerId?: string;
    /** 设计师 */
    designerName?: string;
    /** 出入标识(0: 出，1：入) */
    inOutFlag?: number;
    /** 库存明细-移动后 */
    inventoryDetailAfter?: string;
    /** 库存明细-移动前 */
    inventoryDetailBefore?: string;
    /** 库存id-移动后 */
    inventoryIdAfter?: string;
    /** 现有锁定库存 */
    lockedInventory?: number;
    /** 现有锁定库存 移动后 */
    lockedInventoryAfter?: number;
    /** 现有锁定库存 移动前 */
    lockedInventoryBefore?: number;
    /** 物料编码-移动后 */
    materialCodeAfter?: string;
    /** 物料色号编码-移动后 */
    materialColorCodeAfter?: string;
    /** 物料色号id-移动后 */
    materialColorIdAfter?: string;
    /** 物料色号名称-移动后 */
    materialColorNameAfter?: string;
    /** 物料id-移动后 */
    materialIdAfter?: string;
    /** 物料名称 */
    materialName?: string;
    /** 物料类型 */
    materialType?: string;
    /** 物料类型 */
    materialTypeName?: string;
    /** 修改人 */
    modifyBy?: string;
    /** 修改时间 */
    modifyTime?: string;
    /** 移动记录编号 */
    moveHistoryCode?: string;
    /** 主键id */
    moveHistoryId?: string;
    /** 移动记录年度 */
    moveHistoryYear?: string;
    /** 库存移动原因 */
    moveReason?: string;
    /** 库存移动类型 */
    moveTypName?: string;
    /** 库存移动类型code(数据字典) */
    moveTypeCode?: string;
    /** 现有库存总数 */
    onHandInventory?: number;
    /** 现有库存总数 移动后 */
    onHandInventoryAfter?: number;
    /** 现有库存总数 移动前 */
    onHandInventoryBefore?: number;
    /** 提剩锁定 */
    onHandPickUpLockedInventory?: number;
    /** 提剩锁定 移动后 */
    onHandPickUpLockedInventoryAfter?: number;
    /** 提剩锁定 移动前 */
    onHandPickUpLockedInventoryBefore?: number;
    /** 生产锁定 */
    onHandProduceLockedInventory?: number;
    /** 生产锁定 移动后 */
    onHandProduceLockedInventoryAfter?: number;
    /** 生产锁定 移动前 */
    onHandProduceLockedInventoryBefore?: number;
    /** 归属方-移动后 */
    ownnerIdAfter?: string;
    /** 归属方-移动后 */
    ownnerNameAfter?: string;
    /** 调入库存归属 */
    ownnerNameIn?: string;
    /** 调出库存归属 */
    ownnerNameOut?: string;
    /** 潘通色 */
    pantone?: string;
    /** 计划方-移动后 */
    plannerIdAfter?: string;
    /** 计划方-移动后 */
    plannerNameAfter?: string;
    /** 采购系数-移动后 */
    purchaseCoefficientAfter?: number;
    /** 采购单价-移动后 */
    purchasePriceAfter?: number;
    /** 采购单位-移动后 */
    purchaseUnitAfter?: string;
    /** 采购单位-移动后 */
    purchaseUnitNameAfter?: string;
    /** 关联id  (1个业务操作对应多条记录) */
    refId?: string;
    /** 关联单据号 */
    refOrderCode?: string;
    /** 关联单据行号 */
    refOrderDetailCode?: string;
    /** 关联单据行id */
    refOrderDetailId?: string;
    /** 关联单据id */
    refOrderId?: string;
    /** 备注 */
    remark?: string;
    /** 预计设计号库存 */
    scheduledDesignNoInventory?: number;
    /** 预计设计号库存 移动后 */
    scheduledDesignNoInventoryAfter?: number;
    /** 预计设计号库存 移动前 */
    scheduledDesignNoInventoryBefore?: number;
    /** 预计入库总数 */
    scheduledInventory?: number;
    /** 预计入库总数 移动后 */
    scheduledInventoryAfter?: number;
    /** 预计入库总数 移动前 */
    scheduledInventoryBefore?: number;
    /** 预计生产锁定 */
    scheduledLockedInventory?: number;
    /** 预计生产锁定 移动后 */
    scheduledLockedInventoryAfter?: number;
    /** 预计生产锁定 移动前 */
    scheduledLockedInventoryBefore?: number;
    /** 预计共享库存 */
    scheduledSharedInventory?: number;
    /** 预计共享库存 移动后 */
    scheduledSharedInventoryAfter?: number;
    /** 预计共享库存 移动前 */
    scheduledSharedInventoryBefore?: number;
    /** 系列 */
    series?: string;
    /** 系列 */
    seriesName?: string;
    /** 共享库存 */
    sharedInventory?: number;
    /** 共享库存 移动后 */
    sharedInventoryAfter?: number;
    /** 共享库存 移动前 */
    sharedInventoryBefore?: number;
    /** 规格-移动后 */
    specificationAfter?: string;
    /** 标准颜色 */
    standColor?: string;
    /** 标准颜色色号 */
    standColorNumber?: string;
    /** 供应商色号-移动后 */
    supplierColorNoAfter?: string;
    /** 供应商货号-移动后 */
    supplierGoodsNoAfter?: string;
    /** 供应商id-移动后 */
    supplierIdAfter?: string;
    /** 供应商id-移动后 */
    supplierNameAfter?: string;
    /** 租户ID */
    tenantId?: string;
    /** 缸号-移动后 */
    vatNoAfter?: string;
    /** 版本号 */
    version?: number;
    /** 仓库编码-移动后 */
    warehouseCodeAfter?: string;
    /** 库存地编码-移动后 */
    warehouseDistrictCodeAfter?: string;
    /** 调入库存地编码 */
    warehouseDistrictCodeIn?: string;
    /** 调出库存地编码 */
    warehouseDistrictCodeOut?: string;
    /** 库存地id-移动后 */
    warehouseDistrictIdAfter?: string;
    /** 库存地id-移动后 */
    warehouseDistrictNameAfter?: string;
    /** 调入库存地名称 */
    warehouseDistrictNameIn?: string;
    /** 调出库存地名称 */
    warehouseDistrictNameOut?: string;
    /** 仓库id-移动后 */
    warehouseIdAfter?: string;
    /** 仓库类型code */
    warehouseTypeCode?: string;
    /** 仓库类型 */
    warehouseTypeName?: string;
    /** 调入仓库类型 */
    warehouseTypeNameIn?: string;
    /** 调出仓库类型 */
    warehouseTypeNameOut?: string;
    /** 年份 */
    year?: number;
  };

  type Link = {
    href?: string;
    templated?: boolean;
  };

  type InvtInventoryMoveHistoryQuery = {
    /** 批次号 */
    batchNo?: string;
    /** 当前页号（取值从1开始） */
    current?: number;
    /** 设计号 */
    designNo?: string;
    /** 设计师Id */
    designerId?: number;
    /** 物料编码 */
    materialCode?: string;
    /** 物料色号 */
    materialColorCode?: string;
    /** 物料id */
    materialId?: number;
    /** 物料ids */
    materialIds?: number[];
    /** 主键id */
    moveHistoryIds?: number[];
    /** 移动时间自 */
    moveTimeFrom?: string;
    /** 移动时间至 */
    moveTimeTo?: string;
    /** 移动类型 */
    moveTypeCodes?: string[];
    /** 排序设置列表 */
    orders?: Order[];
    /** 关联单据号 */
    refOrderCode?: string;
    /** 系列 */
    series?: string[];
    /** 每页显示条数 */
    size?: number;
    /** 供应商色号 */
    supplierColorNo?: string;
    /** 供应商货号 */
    supplierGoodsNo?: string;
    /** 批量供应商id */
    supplierIds?: number[];
    /** 调入仓库类型 */
    warehouseTypeCodeAfter?: string[];
    /** 调出仓库类型 */
    warehouseTypeCodeBefore?: string[];
    /** 年份 */
    years?: number[];
  };

  type InvtInventoryMoveHistoryWebDTO = {
    /** 有效标记 1：禁用 0：有效 */
    activeFlag?: number;
    /** 可用库存量 */
    availableInventory?: number;
    /** 可用库存量 移动后 */
    availableInventoryAfter?: number;
    /** 可用库存量 移动前 */
    availableInventoryBefore?: number;
    /** 基本单价-移动后 */
    basePriceAfter?: number;
    /** 基本单位-移动后 */
    baseUnitAfter?: string;
    /** 基本单位-移动后 */
    baseUnitNameAfter?: string;
    /** 批次号-移动后 */
    batchNoAfter?: string;
    /** 品牌id */
    brandId?: string;
    /** 品牌 */
    brandName?: string;
    /** Color色 */
    color?: string;
    /** 创建人 */
    createBy?: string;
    /** 创建人 */
    createByName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 删除标记 null：删除 0：未删除  */
    deleteFlag?: number;
    /** 设计号-移动后 */
    designNoAfter?: string;
    /** 调入设计号 */
    designNoIn?: string;
    /** 设计号库存 */
    designNoInventory?: number;
    /** 设计号库存 移动后 */
    designNoInventoryAfter?: number;
    /** 设计号库存 移动前 */
    designNoInventoryBefore?: number;
    /** 调出设计号 */
    designNoOut?: string;
    /** 设计师id */
    designerId?: string;
    /** 设计师 */
    designerName?: string;
    /** 出入标识(0: 出，1：入) */
    inOutFlag?: number;
    /** 库存明细-移动后 */
    inventoryDetailAfter?: string;
    /** 库存明细-移动前 */
    inventoryDetailBefore?: string;
    /** 库存id-移动后 */
    inventoryIdAfter?: string;
    /** 现有锁定库存 */
    lockedInventory?: number;
    /** 现有锁定库存 移动后 */
    lockedInventoryAfter?: number;
    /** 现有锁定库存 移动前 */
    lockedInventoryBefore?: number;
    /** 物料编码-移动后 */
    materialCodeAfter?: string;
    /** 物料色号编码-移动后 */
    materialColorCodeAfter?: string;
    /** 物料色号id-移动后 */
    materialColorIdAfter?: string;
    /** 物料色号名称-移动后 */
    materialColorNameAfter?: string;
    /** 物料id-移动后 */
    materialIdAfter?: string;
    /** 物料名称 */
    materialName?: string;
    /** 物料类型 */
    materialType?: string;
    /** 物料类型 */
    materialTypeName?: string;
    /** 修改人 */
    modifyBy?: string;
    /** 修改时间 */
    modifyTime?: string;
    /** 移动记录编号 */
    moveHistoryCode?: string;
    /** 主键id */
    moveHistoryId?: string;
    /** 移动记录年度 */
    moveHistoryYear?: string;
    /** 库存移动原因 */
    moveReason?: string;
    /** 库存移动类型 */
    moveTypName?: string;
    /** 库存移动类型code(数据字典) */
    moveTypeCode?: string;
    /** 现有库存总数 */
    onHandInventory?: number;
    /** 现有库存总数 移动后 */
    onHandInventoryAfter?: number;
    /** 现有库存总数 移动前 */
    onHandInventoryBefore?: number;
    /** 提剩锁定 */
    onHandPickUpLockedInventory?: number;
    /** 提剩锁定 移动后 */
    onHandPickUpLockedInventoryAfter?: number;
    /** 提剩锁定 移动前 */
    onHandPickUpLockedInventoryBefore?: number;
    /** 生产锁定 */
    onHandProduceLockedInventory?: number;
    /** 生产锁定 移动后 */
    onHandProduceLockedInventoryAfter?: number;
    /** 生产锁定 移动前 */
    onHandProduceLockedInventoryBefore?: number;
    /** 归属方-移动后 */
    ownnerIdAfter?: string;
    /** 归属方-移动后 */
    ownnerNameAfter?: string;
    /** 调入库存归属 */
    ownnerNameIn?: string;
    /** 调出库存归属 */
    ownnerNameOut?: string;
    /** 潘通色 */
    pantone?: string;
    /** 计划方-移动后 */
    plannerIdAfter?: string;
    /** 计划方-移动后 */
    plannerNameAfter?: string;
    /** 采购系数-移动后 */
    purchaseCoefficientAfter?: number;
    /** 采购单价-移动后 */
    purchasePriceAfter?: number;
    /** 采购单位-移动后 */
    purchaseUnitAfter?: string;
    /** 采购单位-移动后 */
    purchaseUnitNameAfter?: string;
    /** 关联id  (1个业务操作对应多条记录) */
    refId?: string;
    /** 关联单据号 */
    refOrderCode?: string;
    /** 关联单据行号 */
    refOrderDetailCode?: string;
    /** 关联单据行id */
    refOrderDetailId?: string;
    /** 关联单据id */
    refOrderId?: string;
    /** 备注 */
    remark?: string;
    /** 预计设计号库存 */
    scheduledDesignNoInventory?: number;
    /** 预计设计号库存 移动后 */
    scheduledDesignNoInventoryAfter?: number;
    /** 预计设计号库存 移动前 */
    scheduledDesignNoInventoryBefore?: number;
    /** 预计入库总数 */
    scheduledInventory?: number;
    /** 预计入库总数 移动后 */
    scheduledInventoryAfter?: number;
    /** 预计入库总数 移动前 */
    scheduledInventoryBefore?: number;
    /** 预计生产锁定 */
    scheduledLockedInventory?: number;
    /** 预计生产锁定 移动后 */
    scheduledLockedInventoryAfter?: number;
    /** 预计生产锁定 移动前 */
    scheduledLockedInventoryBefore?: number;
    /** 预计共享库存 */
    scheduledSharedInventory?: number;
    /** 预计共享库存 移动后 */
    scheduledSharedInventoryAfter?: number;
    /** 预计共享库存 移动前 */
    scheduledSharedInventoryBefore?: number;
    /** 系列 */
    series?: string;
    /** 系列 */
    seriesName?: string;
    /** 共享库存 */
    sharedInventory?: number;
    /** 共享库存 移动后 */
    sharedInventoryAfter?: number;
    /** 共享库存 移动前 */
    sharedInventoryBefore?: number;
    /** 规格-移动后 */
    specificationAfter?: string;
    /** 标准颜色 */
    standColor?: string;
    /** 标准颜色色号 */
    standColorNumber?: string;
    /** 供应商色号-移动后 */
    supplierColorNoAfter?: string;
    /** 供应商货号-移动后 */
    supplierGoodsNoAfter?: string;
    /** 供应商id-移动后 */
    supplierIdAfter?: string;
    /** 供应商id-移动后 */
    supplierNameAfter?: string;
    /** 租户ID */
    tenantId?: string;
    /** 缸号-移动后 */
    vatNoAfter?: string;
    /** 版本号 */
    version?: number;
    /** 仓库编码-移动后 */
    warehouseCodeAfter?: string;
    /** 库存地编码-移动后 */
    warehouseDistrictCodeAfter?: string;
    /** 调入库存地编码 */
    warehouseDistrictCodeIn?: string;
    /** 调出库存地编码 */
    warehouseDistrictCodeOut?: string;
    /** 库存地id-移动后 */
    warehouseDistrictIdAfter?: string;
    /** 库存地id-移动后 */
    warehouseDistrictNameAfter?: string;
    /** 调入库存地名称 */
    warehouseDistrictNameIn?: string;
    /** 调出库存地名称 */
    warehouseDistrictNameOut?: string;
    /** 仓库id-移动后 */
    warehouseIdAfter?: string;
    /** 仓库类型code */
    warehouseTypeCode?: string;
    /** 仓库类型 */
    warehouseTypeName?: string;
    /** 调入仓库类型 */
    warehouseTypeNameIn?: string;
    /** 调出仓库类型 */
    warehouseTypeNameOut?: string;
    /** 年份 */
    year?: number;
  };

  type Link = {
    href?: string;
    templated?: boolean;
  };

  type Link = {
    href?: string;
    templated?: boolean;
  };

  type MaterialBaseInfoDTO = {
    /** 物料 大类 */
    categoryBig?: string;
    /** 物料类型(code) */
    categoryCode?: string;
    /** 物料 中类 */
    categoryMedium?: string;
    /** 物料类型(名称) */
    categoryName?: string;
    /** 物料 小类 */
    categorySmall?: string;
    /** 物料中类名称 */
    materialCategoryMediumName?: string;
    /** 物料编码 */
    materialCode?: string;
    materialDesc?: string;
    materialFullCode?: string;
    /** 物料id */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
  };

  type MaterialColorBaseInfoDTO = {
    /** Color色 */
    color?: string;
    /** 图片URL--暂时用这个字段 */
    imageUrl?: string;
    /** 物料色号编码 */
    materialColorCode?: string;
    materialColorDesc?: string;
    /** 物料色号id */
    materialColorId?: string;
    /** 物料色号名称 */
    materialColorName?: string;
    /** 潘通色 */
    pantone?: string;
    /** 列表缩略图 */
    picUrl?: string;
    /** 图片 */
    picUrls?: ImageDirectUrlResultDTO[];
    /** rgb色 */
    rgb?: string;
    /** 标准色 */
    standardColor?: string;
    /** 标准色号 */
    standardColorNumber?: string;
  };

  type ModelAndView = {
    empty?: boolean;
    model?: Record<string, any>;
    modelMap?: Record<string, any>;
    reference?: boolean;
    status?:
      | 'ACCEPTED'
      | 'ALREADY_REPORTED'
      | 'BAD_GATEWAY'
      | 'BAD_REQUEST'
      | 'BANDWIDTH_LIMIT_EXCEEDED'
      | 'CHECKPOINT'
      | 'CONFLICT'
      | 'CONTINUE'
      | 'CREATED'
      | 'DESTINATION_LOCKED'
      | 'EXPECTATION_FAILED'
      | 'FAILED_DEPENDENCY'
      | 'FORBIDDEN'
      | 'FOUND'
      | 'GATEWAY_TIMEOUT'
      | 'GONE'
      | 'HTTP_VERSION_NOT_SUPPORTED'
      | 'IM_USED'
      | 'INSUFFICIENT_SPACE_ON_RESOURCE'
      | 'INSUFFICIENT_STORAGE'
      | 'INTERNAL_SERVER_ERROR'
      | 'I_AM_A_TEAPOT'
      | 'LENGTH_REQUIRED'
      | 'LOCKED'
      | 'LOOP_DETECTED'
      | 'METHOD_FAILURE'
      | 'METHOD_NOT_ALLOWED'
      | 'MOVED_PERMANENTLY'
      | 'MOVED_TEMPORARILY'
      | 'MULTIPLE_CHOICES'
      | 'MULTI_STATUS'
      | 'NETWORK_AUTHENTICATION_REQUIRED'
      | 'NON_AUTHORITATIVE_INFORMATION'
      | 'NOT_ACCEPTABLE'
      | 'NOT_EXTENDED'
      | 'NOT_FOUND'
      | 'NOT_IMPLEMENTED'
      | 'NOT_MODIFIED'
      | 'NO_CONTENT'
      | 'OK'
      | 'PARTIAL_CONTENT'
      | 'PAYLOAD_TOO_LARGE'
      | 'PAYMENT_REQUIRED'
      | 'PERMANENT_REDIRECT'
      | 'PRECONDITION_FAILED'
      | 'PRECONDITION_REQUIRED'
      | 'PROCESSING'
      | 'PROXY_AUTHENTICATION_REQUIRED'
      | 'REQUESTED_RANGE_NOT_SATISFIABLE'
      | 'REQUEST_ENTITY_TOO_LARGE'
      | 'REQUEST_HEADER_FIELDS_TOO_LARGE'
      | 'REQUEST_TIMEOUT'
      | 'REQUEST_URI_TOO_LONG'
      | 'RESET_CONTENT'
      | 'SEE_OTHER'
      | 'SERVICE_UNAVAILABLE'
      | 'SWITCHING_PROTOCOLS'
      | 'TEMPORARY_REDIRECT'
      | 'TOO_EARLY'
      | 'TOO_MANY_REQUESTS'
      | 'UNAUTHORIZED'
      | 'UNAVAILABLE_FOR_LEGAL_REASONS'
      | 'UNPROCESSABLE_ENTITY'
      | 'UNSUPPORTED_MEDIA_TYPE'
      | 'UPGRADE_REQUIRED'
      | 'URI_TOO_LONG'
      | 'USE_PROXY'
      | 'VARIANT_ALSO_NEGOTIATES';
    view?: View;
    viewName?: string;
  };

  type MtrAdjustOrderDTO = {
    /** 调整单号 */
    adjustNo?: string;
    /** 调整单id */
    amHeaderId?: number;
  };

  type Order = {
    /** 是否正序排列 */
    asc?: boolean;
    /** 排序字段 */
    column?: string;
  };

  type PageResultAdjustOrderInfoDTO = {
    /** 当前页数据内容 */
    content?: AdjustOrderInfoDTO[];
    /** 当前页号（取值从1开始） */
    current?: number;
    /** 总页数 */
    pages?: number;
    /** 每页显示条数 */
    size?: number;
    /** 数据总条数 */
    total?: number;
  };

  type PageResultAllocationOrderResultDTO = {
    /** 当前页数据内容 */
    content?: AllocationOrderResultDTO[];
    /** 当前页号（取值从1开始） */
    current?: number;
    /** 总页数 */
    pages?: number;
    /** 每页显示条数 */
    size?: number;
    /** 数据总条数 */
    total?: number;
  };

  type PageResultInventoryGroupDTO = {
    /** 当前页数据内容 */
    content?: InventoryGroupDTO[];
    /** 当前页号（取值从1开始） */
    current?: number;
    /** 总页数 */
    pages?: number;
    /** 每页显示条数 */
    size?: number;
    /** 数据总条数 */
    total?: number;
  };

  type PageResultInvtInventoryMoveHistoryWebDTO = {
    /** 当前页数据内容 */
    content?: InvtInventoryMoveHistoryWebDTO[];
    /** 当前页号（取值从1开始） */
    current?: number;
    /** 总页数 */
    pages?: number;
    /** 每页显示条数 */
    size?: number;
    /** 数据总条数 */
    total?: number;
  };

  type PageResultInvtInventorySupplierMoveHistoryWebDTO = {
    /** 当前页数据内容 */
    content?: InvtInventorySupplierMoveHistoryWebDTO[];
    /** 当前页号（取值从1开始） */
    current?: number;
    /** 总页数 */
    pages?: number;
    /** 每页显示条数 */
    size?: number;
    /** 数据总条数 */
    total?: number;
  };

  type PageResultPickupListDTO = {
    /** 当前页数据内容 */
    content?: PickupListDTO[];
    /** 当前页号（取值从1开始） */
    current?: number;
    /** 总页数 */
    pages?: number;
    /** 每页显示条数 */
    size?: number;
    /** 数据总条数 */
    total?: number;
  };

  type PageResultPickupPurchaseOrderDTO = {
    /** 当前页数据内容 */
    content?: PickupPurchaseOrderDTO[];
    /** 当前页号（取值从1开始） */
    current?: number;
    /** 总页数 */
    pages?: number;
    /** 每页显示条数 */
    size?: number;
    /** 数据总条数 */
    total?: number;
  };

  type PageResultPickupPurchaseOrderDetailDTO = {
    /** 当前页数据内容 */
    content?: PickupPurchaseOrderDetailDTO[];
    /** 当前页号（取值从1开始） */
    current?: number;
    /** 总页数 */
    pages?: number;
    /** 每页显示条数 */
    size?: number;
    /** 数据总条数 */
    total?: number;
  };

  type PageResultPickupPurchaseRequisitionDTO = {
    /** 当前页数据内容 */
    content?: PickupPurchaseRequisitionDTO[];
    /** 当前页号（取值从1开始） */
    current?: number;
    /** 总页数 */
    pages?: number;
    /** 每页显示条数 */
    size?: number;
    /** 数据总条数 */
    total?: number;
  };

  type PageResultPickupPurchaseRequisitionDetailDTO = {
    /** 当前页数据内容 */
    content?: PickupPurchaseRequisitionDetailDTO[];
    /** 当前页号（取值从1开始） */
    current?: number;
    /** 总页数 */
    pages?: number;
    /** 每页显示条数 */
    size?: number;
    /** 数据总条数 */
    total?: number;
  };

  type PageResultPickupRemarkDTO = {
    /** 当前页数据内容 */
    content?: PickupRemarkDTO[];
    /** 当前页号（取值从1开始） */
    current?: number;
    /** 总页数 */
    pages?: number;
    /** 每页显示条数 */
    size?: number;
    /** 数据总条数 */
    total?: number;
  };

  type PageResultWarehouseBatchInfoDTO = {
    /** 当前页数据内容 */
    content?: WarehouseBatchInfoDTO[];
    /** 当前页号（取值从1开始） */
    current?: number;
    /** 总页数 */
    pages?: number;
    /** 每页显示条数 */
    size?: number;
    /** 数据总条数 */
    total?: number;
  };

  type PageResultWarehouseDTO = {
    /** 当前页数据内容 */
    content?: WarehouseDTO[];
    /** 当前页号（取值从1开始） */
    current?: number;
    /** 总页数 */
    pages?: number;
    /** 每页显示条数 */
    size?: number;
    /** 数据总条数 */
    total?: number;
  };

  type PageResultWarehouseDistrictDTO = {
    /** 当前页数据内容 */
    content?: WarehouseDistrictDTO[];
    /** 当前页号（取值从1开始） */
    current?: number;
    /** 总页数 */
    pages?: number;
    /** 每页显示条数 */
    size?: number;
    /** 数据总条数 */
    total?: number;
  };

  type PageResultWarehouseInventoryBaseInfoDTO = {
    /** 当前页数据内容 */
    content?: WarehouseInventoryBaseInfoDTO[];
    /** 当前页号（取值从1开始） */
    current?: number;
    /** 总页数 */
    pages?: number;
    /** 每页显示条数 */
    size?: number;
    /** 数据总条数 */
    total?: number;
  };

  type PageResultWarehouseInventoryBatchInfoDTO = {
    /** 当前页数据内容 */
    content?: WarehouseInventoryBatchInfoDTO[];
    /** 当前页号（取值从1开始） */
    current?: number;
    /** 总页数 */
    pages?: number;
    /** 每页显示条数 */
    size?: number;
    /** 数据总条数 */
    total?: number;
  };

  type PageResultWarehouseInventoryDTO = {
    /** 当前页数据内容 */
    content?: WarehouseInventoryDTO[];
    /** 当前页号（取值从1开始） */
    current?: number;
    /** 总页数 */
    pages?: number;
    /** 每页显示条数 */
    size?: number;
    /** 数据总条数 */
    total?: number;
  };

  type PageResultWarehouseInventoryDetailDTO = {
    /** 当前页数据内容 */
    content?: WarehouseInventoryDetailDTO[];
    /** 当前页号（取值从1开始） */
    current?: number;
    /** 总页数 */
    pages?: number;
    /** 每页显示条数 */
    size?: number;
    /** 数据总条数 */
    total?: number;
  };

  type PageResultWarehouseInventoryExternalDTO = {
    /** 当前页数据内容 */
    content?: WarehouseInventoryExternalDTO[];
    /** 当前页号（取值从1开始） */
    current?: number;
    /** 总页数 */
    pages?: number;
    /** 每页显示条数 */
    size?: number;
    /** 数据总条数 */
    total?: number;
  };

  type PageResultWarehouseInventoryInfoDTO = {
    /** 当前页数据内容 */
    content?: WarehouseInventoryInfoDTO[];
    /** 当前页号（取值从1开始） */
    current?: number;
    /** 总页数 */
    pages?: number;
    /** 每页显示条数 */
    size?: number;
    /** 数据总条数 */
    total?: number;
  };

  type PageResultWarehouseInventoryOccupationDTO = {
    /** 当前页数据内容 */
    content?: WarehouseInventoryOccupationDTO[];
    /** 当前页号（取值从1开始） */
    current?: number;
    /** 总页数 */
    pages?: number;
    /** 每页显示条数 */
    size?: number;
    /** 数据总条数 */
    total?: number;
  };

  type PageResultWarehouseInventorySAPInfoDTO = {
    /** 当前页数据内容 */
    content?: WarehouseInventorySAPInfoDTO[];
    /** 当前页号（取值从1开始） */
    current?: number;
    /** 总页数 */
    pages?: number;
    /** 每页显示条数 */
    size?: number;
    /** 数据总条数 */
    total?: number;
  };

  type PageResultWarehouseVatInfoDTO = {
    /** 当前页数据内容 */
    content?: WarehouseVatInfoDTO[];
    /** 当前页号（取值从1开始） */
    current?: number;
    /** 总页数 */
    pages?: number;
    /** 每页显示条数 */
    size?: number;
    /** 数据总条数 */
    total?: number;
  };

  type PickupApplyTerminationUpdateCmd = {
    /** 申请终止 (库存处理: 0: 归还保留, 1: 盘亏) */
    applyTerminationFlag: number;
    /** 主键ID */
    ids: number[];
    /** 备注 */
    remark?: string;
  };

  type PickupApproveTerminationUpdateCmd = {
    /** 审批终止 (库存处理: 0: 归还保留, 1: 盘亏) */
    approveTerminationFlag: number;
    /** 主键ID */
    ids: number[];
    /** 审核意见（1 批准  0 拒绝） */
    option: number;
    /** 备注 */
    remark?: string;
  };

  type PickupDistributionBuyersUpdateCmd = {
    buyerId: number;
    ids: number[];
  };

  type PickupListDTO = {
    /** 有效标记 (1: 禁用 0: 有效) */
    activeFlag?: number;
    /** 调料设计号 */
    allocateDesignNo?: string;
    /** 调料设计师ID */
    allocateDesignerId?: string;
    /** 调料设计师名称 */
    allocateDesignerName?: string;
    /** 调料单号 */
    allocateOrderNo?: string;
    /** 可用库存量 */
    availableStockQuantity?: number;
    /** 基本单价 */
    basePrice?: number;
    /** 基本单位 */
    baseUnit?: string;
    /** 基本单位名称 */
    baseUnitName?: string;
    /** 批次ID */
    batchId?: string;
    /** 批次号 */
    batchNo?: string;
    /** 批次状态 */
    batchStatus?: string;
    /** 批次状态名称 */
    batchStatusName?: string;
    /** 业务详情行id */
    businessDetailId?: number;
    /** 业务单号 */
    businessOrderNo?: string;
    /** Color色色号 */
    color?: string;
    /** color_base_id, 颜色表ID */
    colorBaseId?: string;
    /** 物料色号 (从物料编码中带出) */
    colorNumber?: string;
    /** 创建人 */
    createBy?: string;
    /** 创建人名称 */
    createByName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 删除标记 (1: 删除 0: 未删除) */
    deleteFlag?: number;
    /** 设计ID */
    designId?: string;
    /** 设计号 */
    designNo?: string;
    /** 设计号库存量 */
    designNoStockQuantity?: number;
    /** 设计师 ID */
    designerId?: string;
    /** 设计师名称 */
    designerName?: string;
    /** 在仓期 (天) */
    inWarehouseDay?: number;
    /** 主键ID */
    inventoryId?: string;
    /** 保留标记 (1: 标记保留, 0: 未标记保留) */
    keepFlag?: number;
    /** 锁定库存量 */
    lockingStockQuantity?: number;
    /** 物料中品类ID */
    materialCategoryMediumId?: string;
    /** 物料中品类名称 */
    materialCategoryMediumName?: string;
    /** 物料编码 */
    materialCode?: string;
    /** 物料图片列表 */
    materialFileUrls?: string[];
    /** 物料图片 (',' 分隔) */
    materialFiles?: string;
    /** 物料标记 */
    materialFlag?: string;
    /** 物料主键ID */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 常备物料标识 (1: 常备物料, 0: 非常备物料) */
    materialStandingFlag?: number;
    /** 物料类型：面料、辅料 */
    materialType?: string;
    /** 物料类型名称：面料、辅料 */
    materialTypeName?: string;
    /** 修改人 */
    modifyBy?: string;
    /** 修改人名称 */
    modifyByName?: string;
    /** 修改时间 */
    modifyTime?: string;
    /** 现有库存量 */
    onHandInventory?: number;
    /** 原系列 */
    originalSeries?: string;
    /** 库存归属方 */
    ownnerId?: string;
    /** 库存归属方 */
    ownnerName?: string;
    /** 潘通色色号 */
    pantone?: string;
    /** 主键ID */
    pickupListId?: string;
    /** 提料数量 */
    pickupNumber?: number;
    /** 库存归属计划方 */
    plannerId?: string;
    /** 库存归属计划方 */
    plannerName?: string;
    /** 系数 */
    purchaseCoefficient?: number;
    /** 采购单价 */
    purchasePrice?: number;
    /** 风险标记 (1: 风险, 0: 非风险) */
    riskFlag?: number;
    /** 系列 */
    series?: string;
    /** 共享库存量 */
    sharedStockQuantity?: number;
    /** 规格 */
    specification?: string;
    /** 标准色 */
    standardColor?: string;
    /** 状态名称 */
    statusName?: string;
    /** 风格 */
    style?: string;
    /** 供应商编码 */
    supplierCode?: string;
    /** 供应商色号 */
    supplierColorNo?: string;
    /** 供应商货号 */
    supplierGoodsNo?: string;
    /** 供应商 ID */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
    /** 租户ID */
    tenantId?: string;
    /** 缸号 */
    vatNo?: string;
    /** 版本号 */
    version?: number;
    /** 仓库编码 */
    warehouseCode?: string;
    /** 仓库主键ID */
    warehouseId?: string;
    /** 仓库名称 */
    warehouseName?: string;
    /** 仓库类型code(数据字典) */
    warehouseTypeCode?: string;
    /** 仓库类型code(数据字典) */
    warehouseTypeName?: string;
  };

  type PickupListQuery = {
    /** 调料单号 (模糊搜索) */
    allocateOrderNoLike?: string;
    /** 批次号 (模糊搜索) */
    batchNoLike?: string;
    /** 物料色号 (从物料编码中带出) (模糊搜索) */
    colorNumberLike?: string;
    /** 结束 在仓期 (天) */
    endInWarehouseDay?: number;
    /** 保留标记 (1: 标记保留, 0: 未标记保留) */
    keepFlag?: number;
    /** 物料编码 (模糊搜索) */
    materialCodeLike?: string;
    /** 物料名称 (模糊搜索) */
    materialNameLike?: string;
    /** 常备物料标识 (1: 常备物料, 0: 非常备物料) */
    materialStandingFlag?: number;
    /** 物料类型：面料、辅料 */
    materialType?: string;
    /** 风险标记 (1: 风险, 0: 非风险) */
    riskFlag?: number;
    /** 开始 在仓期 (天) */
    startInWarehouseDay?: number;
    /** 供应商色号 (模糊搜索) */
    supplierColorNoLike?: string;
    /** 供应商货号 (模糊搜索) */
    supplierGoodsNoLike?: string;
  };

  type PickupListSummaryDTO = {
    /** 本月已提金额 */
    monthAmount?: number;
    /** 本月已提金额 */
    monthSum?: number;
    /** 本年已提金额 */
    yearAmount?: number;
    /** 本年已提数量 */
    yearSum?: number;
  };

  type PickupListUpdateCmd = {
    /** 调料设计号 */
    allocateDesignNo: string;
    /** 调料设计师 */
    allocateDesignerId: number;
    /** 调料单号 */
    allocateOrderNo: string;
    /** 可用库存量 */
    availableStockQuantity: number;
    /** 基本单价 */
    basePrice: number;
    /** 基本单位 */
    baseUnit: string;
    /** 批次id */
    batchId: number;
    /** 批次号 */
    batchNo: string;
    /** 批次状态 */
    batchStatus: string;
    /** 业务详情行id */
    businessDetailId?: number;
    /** 业务单号 */
    businessOrderNo?: string;
    /** Color色色号 */
    color: string;
    /** color_base_id, 颜色表ID */
    colorBaseId: number;
    /** 物料色号 (从物料编码中带出) */
    colorNumber: string;
    /** 设计ID */
    designId: number;
    /** 设计号 */
    designNo: string;
    /** 设计号库存量 */
    designNoStockQuantity: number;
    /** 设计师 ID */
    designerId: number;
    /** 在仓期 (天) */
    inWarehouseDay: number;
    /** 保留标记 (1: 标记保留, 0: 未标记保留) */
    keepFlag: number;
    /** 锁定库存量 */
    lockingStockQuantity: number;
    /** 物料中品类ID */
    materialCategoryMediumId: number;
    /** 物料中品类名称 */
    materialCategoryMediumName: string;
    /** 物料编码 */
    materialCode: string;
    /** 物料图片 (',' 分隔) */
    materialFiles: string;
    /** 物料标记 */
    materialFlag: string;
    /** 物料主键ID */
    materialId: number;
    /** 物料名称 */
    materialName: string;
    /** 常备物料标识 (1: 常备物料, 0: 非常备物料) */
    materialStandingFlag: number;
    /** 物料类型：面料、辅料 */
    materialType: string;
    /** 现有库存量 */
    onHandInventory: number;
    /** 供应商色号 */
    orgSupplierColorCode: string;
    /** 原系列 */
    originalSeries: string;
    /** 库存归属方 */
    ownnerId: number;
    /** 潘通色色号 */
    pantone: string;
    /** 主键ID */
    pickupListId: number;
    /** 提料数量 */
    pickupNumber: number;
    /** 库存归属计划方 */
    plannerId: number;
    /** 系数 */
    purchaseCoefficient: number;
    /** 采购单价 */
    purchasePrice: number;
    /** 系列 */
    series: string;
    /** 共享库存量 */
    sharedStockQuantity: number;
    /** 规格 */
    specification: string;
    /** 风格 */
    style: string;
    /** 供应商编码 */
    supplierCode: string;
    /** 供应商色号 */
    supplierColorNo: string;
    /** 供应商货号 */
    supplierGoodsNo: string;
    /** 供应商 ID */
    supplierId: number;
    /** 供应商名称 */
    supplierName: string;
    /** 租户ID */
    tenantId: number;
    /** 缸号 */
    vatNo: string;
    /** 仓库编码 */
    warehouseCode: string;
    /** 仓库主键ID */
    warehouseId: number;
    /** 仓库名称 */
    warehouseName: string;
    /** 仓库类型code(数据字典) */
    warehouseTypeCode: string;
  };

  type PickupPurchaseDeliveryCreateCmd = {
    /** 采购单id */
    purchaseOrderId: number;
  };

  type PickupPurchaseOrderCreateCmd = {
    /** 提料申请单号 */
    purchaseRequisitionIds: number[];
  };

  type PickupPurchaseOrderDTO = {
    /** 调料设计号 */
    allocateDesignNo?: string;
    /** 调料设计师 */
    allocateDesignerId?: string;
    /** 调料设计师名称 */
    allocateDesignerName?: string;
    /** 调料单号 */
    allocateOrderNo?: string;
    /** 申请终止人 */
    applyTerminationBy?: string;
    /** 申请终止 (库存处理: 0: 归还保留, 1: 盘亏) */
    applyTerminationFlag?: number;
    /** 申请终止时间 */
    applyTerminationTime?: string;
    /** 审批终止人 */
    approveTerminationBy?: string;
    /** 审批终止 (库存处理: 0: 归还保留, 1: 盘亏) */
    approveTerminationFlag?: number;
    /** 审批终止时间 */
    approveTerminationTime?: string;
    /** 可用库存量 */
    availableStockQuantity?: number;
    /** 基本单价 */
    basePrice?: number;
    /** 基本单位 */
    baseUnit?: string;
    /** 基本单位 */
    baseUnitName?: string;
    /** 批次 ID */
    batchId?: string;
    /** 批次号 */
    batchNo?: string;
    /** 批次状态 */
    batchStatus?: string;
    /** 批次状态 */
    batchStatusName?: string;
    /** 业务单号 */
    businessOrderNo?: string;
    /** 采购员ID */
    buyerId?: string;
    /** 采购员名称 */
    buyerName?: string;
    /** Color色色号 */
    color?: string;
    /** color_base_id, 颜色表ID */
    colorBaseId?: string;
    /** 物料色号 (从物料编码中带出) */
    colorNumber?: string;
    /** 创建人 */
    createBy?: string;
    /** 创建人名称 */
    createByName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 删除标记 (1: 删除 0: 未删除) */
    deleteFlag?: number;
    /** 设计ID */
    designId?: string;
    /** 设计号 */
    designNo?: string;
    /** 设计号库存量 */
    designNoStockQuantity?: number;
    /** 设计师 ID */
    designerId?: string;
    /** 设计师名称 */
    designerName?: string;
    /** 提料采购订单详情主键ID */
    detailId?: string;
    /** 在仓期 (天) */
    inWarehouseDay?: number;
    /** 主键ID */
    inventoryId?: string;
    /** 锁定库存量 */
    lockingStockQuantity?: number;
    /** 物料中品类ID */
    materialCategoryMediumId?: string;
    /** 物料中品类名称 */
    materialCategoryMediumName?: string;
    /** 物料编码 */
    materialCode?: string;
    /** 物料图片列表 */
    materialFileUrls?: string[];
    /** 物料图片 (',' 分隔) */
    materialFiles?: string;
    /** 物料标记 */
    materialFlag?: string;
    /** 物料主键ID */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 常备物料标识 (1: 常备物料, 0: 非常备物料) */
    materialStandingFlag?: number;
    /** 常备物料标识名称 */
    materialStandingFlagValue?: string;
    /** 物料类型：面料、辅料 */
    materialType?: string;
    /** 物料类型：面料、辅料 */
    materialTypeName?: string;
    /** 修改人 */
    modifyBy?: string;
    /** 修改人名称 */
    modifyByName?: string;
    /** 修改时间 */
    modifyTime?: string;
    /** 预约送货单号列表 */
    mtrDeliveryDTOS?: PickupPurchaseOrderDetailDeliveryDTO[];
    /** 现有库存量 */
    onHandInventory?: number;
    /** 原系列 */
    originalSeries?: string;
    /** 库存归属方 */
    ownnerId?: string;
    /** 库存归属方 */
    ownnerName?: string;
    /** 潘通色色号 */
    pantone?: string;
    /** 提料数量 */
    pickupNumber?: number;
    /** 库存归属计划方 */
    plannerId?: string;
    /** 库存归属计划方 */
    plannerName?: string;
    /** 系数 */
    purchaseCoefficient?: number;
    /** 主键ID */
    purchaseOrderId?: string;
    /** 提料采购单号 */
    purchaseOrderNo?: string;
    /** 采购单价 */
    purchasePrice?: number;
    /** 采购申请详情主键ID */
    purchaseRequisitionDetailId?: string;
    /** 提料采购单ID */
    purchaseRequisitionId?: string;
    /** 提料申请单号 */
    purchaseRequisitionNo?: string;
    /** 接单人 */
    receiveBy?: string;
    /** 接单人名称 */
    receiveByName?: string;
    /** 接单时间 */
    receiveTime?: string;
    /** 最近一条备注 */
    remark?: string;
    /** 备注数量 */
    remarkNumber?: number;
    /** 行号 */
    rowNumber?: number;
    /** 系列 */
    series?: string;
    /** 系列 */
    seriesName?: string;
    /** 共享库存量 */
    sharedStockQuantity?: number;
    /** 规格 */
    specification?: string;
    /** 标准色 */
    standardColor?: string;
    /** 状态 */
    status?: string;
    /** 状态标注 () */
    statusLabel?: string;
    /** 状态名称 */
    statusName?: string;
    /** 风格 */
    style?: string;
    /** 风格 */
    styleName?: string;
    /** 供应商编码 */
    supplierCode?: string;
    /** 供应商色号 */
    supplierColorNo?: string;
    /** 供应商货号 */
    supplierGoodsNo?: string;
    /** 供应商 ID */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
    /** 租户ID */
    tenantId?: string;
    /** 缸号 */
    vatNo?: string;
    /** 版本号 */
    version?: number;
    /** 仓库编码 */
    warehouseCode?: string;
    /** 仓库主键ID */
    warehouseId?: string;
    /** 仓库名称 */
    warehouseName?: string;
    /** 仓库类型code(数据字典) */
    warehouseTypeCode?: string;
    /** 仓库类型 */
    warehouseTypeName?: string;
  };

  type PickupPurchaseOrderDetailDTO = {
    /** 调料设计号 */
    allocateDesignNo?: string;
    /** 调料设计师 */
    allocateDesignerId?: string;
    /** 调料设计师名称 */
    allocateDesignerName?: string;
    /** 调料单号 */
    allocateOrderNo?: string;
    /** 申请终止人 */
    applyTerminationBy?: string;
    /** 申请终止 (库存处理: 0: 归还保留, 1: 盘亏) */
    applyTerminationFlag?: number;
    /** 申请终止时间 */
    applyTerminationTime?: string;
    /** 审批终止人 */
    approveTerminationBy?: string;
    /** 审批终止 (库存处理: 0: 归还保留, 1: 盘亏) */
    approveTerminationFlag?: number;
    /** 审批终止时间 */
    approveTerminationTime?: string;
    /** 可用库存量 */
    availableStockQuantity?: number;
    /** 基本单价 */
    basePrice?: number;
    /** 基本单位 */
    baseUnit?: string;
    /** 基本单位名称 */
    baseUnitName?: string;
    /** 批次 ID */
    batchId?: string;
    /** 批次号 */
    batchNo?: string;
    /** 批次状态 */
    batchStatus?: string;
    /** 批次状态 */
    batchStatusName?: string;
    /** 业务详情行id */
    businessDetailId?: number;
    /** 业务单号 */
    businessOrderNo?: string;
    /** 采购员ID */
    buyerId?: string;
    /** 采购员名称 */
    buyerName?: string;
    /** Color色色号 */
    color?: string;
    /** color_base_id, 颜色表ID */
    colorBaseId?: string;
    /** 物料色号 (从物料编码中带出) */
    colorNumber?: string;
    /** 创建人 */
    createBy?: string;
    /** 创建人名称 */
    createByName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 删除标记 (1: 删除 0: 未删除) */
    deleteFlag?: number;
    /** 设计ID */
    designId?: string;
    /** 设计号 */
    designNo?: string;
    /** 设计号库存量 */
    designNoStockQuantity?: number;
    /** 设计师 ID */
    designerId?: string;
    /** 设计师名称 */
    designerName?: string;
    /** 主键ID */
    detailId?: string;
    /** 在仓期 (天) */
    inWarehouseDay?: number;
    /** 主键ID */
    inventoryId?: string;
    /** 锁定库存量 */
    lockingStockQuantity?: number;
    /** 物料中品类ID */
    materialCategoryMediumId?: string;
    /** 物料中品类名称 */
    materialCategoryMediumName?: string;
    /** 物料编码 */
    materialCode?: string;
    /** 物料图片列表 */
    materialFileUrls?: string[];
    /** 物料主键ID */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 物料类型：面料、辅料 */
    materialType?: string;
    /** 物料类型：面料、辅料 */
    materialTypeName?: string;
    /** 修改人 */
    modifyBy?: string;
    /** 修改人名称 */
    modifyByName?: string;
    /** 修改时间 */
    modifyTime?: string;
    /** 预约送货单号列表 */
    mtrDeliveryDTOS?: PickupPurchaseOrderDetailDeliveryDTO[];
    /** 现有库存量 */
    onHandInventory?: number;
    /** 在途库存ID */
    onRoadInventoryId?: string;
    /** 原系列 */
    originalSeries?: string;
    /** 库存归属方 */
    ownnerId?: string;
    /** 库存归属方 */
    ownnerName?: string;
    /** 潘通色色号 */
    pantone?: string;
    /** 提料数量 */
    pickupNumber?: number;
    /** 库存归属计划方 */
    plannerId?: string;
    /** 库存归属计划方 */
    plannerName?: string;
    /** 申请审批前状态 */
    preStatus?: string;
    /** 系数 */
    purchaseCoefficient?: number;
    /** 提料采购订单主键ID */
    purchaseOrderId?: string;
    /** 采购单价 */
    purchasePrice?: number;
    /** 采购申请详情主键ID */
    purchaseRequisitionDetailId?: string;
    /** 最近一条备注 */
    remark?: string;
    /** 备注数量 */
    remarkNumber?: number;
    /** 行号 */
    rowNumber?: number;
    /** 系列 */
    series?: string;
    /** 共享库存量 */
    sharedStockQuantity?: number;
    /** 规格 */
    specification?: string;
    /** 状态 */
    status?: string;
    /** 状态标注 () */
    statusLabel?: string;
    /** 状态名称 */
    statusName?: string;
    /** 风格 */
    style?: string;
    /** 供应商编码 */
    supplierCode?: string;
    /** 供应商色号 */
    supplierColorNo?: string;
    /** 供应商货号 */
    supplierGoodsNo?: string;
    /** 供应商名称 */
    supplierName?: string;
    /** 租户ID */
    tenantId?: string;
    /** 缸号 */
    vatNo?: string;
    /** 版本号 */
    version?: number;
    /** 仓库编码 */
    warehouseCode?: string;
    /** 仓库主键ID */
    warehouseId?: string;
    /** 仓库名称 */
    warehouseName?: string;
    /** 仓库类型code(数据字典) */
    warehouseTypeCode?: string;
    /** 仓库类型 */
    warehouseTypeName?: string;
  };

  type PickupPurchaseOrderDetailDeliveryDTO = {
    /** 创建人 */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 删除标记 (1: 删除 0: 未删除) */
    deleteFlag?: number;
    /** 主键ID */
    deliveryId?: string;
    /** 提料采购订单详情ID */
    detailId?: string;
    /** 修改人 */
    modifyBy?: string;
    /** 修改时间 */
    modifyTime?: string;
    /** 预约送货详情颜色ID */
    mtrDeliveryDetailColorId?: string;
    /** 预约送货物料主键ID */
    mtrDeliveryDetailId?: string;
    /** 预约送货单主键ID */
    mtrDeliveryId?: string;
    /** 预约送货流水号 */
    mtrDeliveryNo?: string;
    /** 预约送货物料色号状态 */
    mtrStatus?: number;
    /** 预约送货物料色号状态名称 */
    mtrStatusName?: string;
    /** 采购申请详情主键ID */
    purchaseRequisitionDetailId?: string;
    /** 租户ID */
    tenantId?: string;
    /** 版本号 */
    version?: number;
  };

  type PickupPurchaseOrderPrintDTO = {
    /** 供应商地址 */
    address?: string;
    /** 备料行id */
    businessDetailId?: number;
    /** 采购员ID */
    buyerId?: string;
    /** 采购员名称 */
    buyerName?: string;
    /** 合同编号 */
    contractNo?: string;
    /** 创建人 */
    createBy?: string;
    /** 创建人名称 */
    createByName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 币种 */
    currency?: string;
    /** 币种 */
    currencyName?: string;
    /** 库存id */
    inventoryId?: number;
    /** 行信息 */
    lines?: PickupPurchaseOrderPrintLineInfoDTO[];
    /** 付款条件 */
    payTerm?: string;
    /** 付款条件 */
    payTermName?: string;
    /** 付款方式 */
    paymentTerm?: string;
    /** 付款方式 */
    paymentTermName?: string;
    /** 供应商联系人 */
    personCharge?: string;
    /** 供应商联系方式 */
    phone?: string;
    /** 主键ID */
    purchaseOrderId?: string;
    /** 提料采购单号 */
    purchaseOrderNo?: string;
    /** 提料采购单ID */
    purchaseRequisitionId?: string;
    /** 提料申请单号 */
    purchaseRequisitionNo?: string;
    /** 供应商编码 */
    supplierCode?: string;
    /** 供应商 ID */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
    /** 总金额 */
    totalAmount?: number;
  };

  type PickupPurchaseOrderPrintLineInfoDTO = {
    /** 调料设计号 */
    allocateDesignNo?: string;
    /** 调料设计师 */
    allocateDesignerId?: string;
    /** 调料设计师名称 */
    allocateDesignerName?: string;
    /** 调料单号 */
    allocateOrderNo?: string;
    /** 金额 */
    amount?: number;
    /** 基本单价 */
    basePrice?: number;
    /** 基本单位 */
    baseUnit?: string;
    /** 基本单位 */
    baseUnitName?: string;
    /** 批次号 */
    batchNo?: string;
    /** 备料行id */
    businessDetailId?: number;
    /** color_base_id, 颜色表ID */
    colorBaseId?: string;
    /** 物料色号 (从物料编码中带出) */
    colorNumber?: string;
    /** 物料色号 (从物料编码中带出) */
    colorNumberName?: string;
    /** 成分 */
    component?: string;
    /** 删除标记 (1: 删除 0: 未删除) */
    deleteFlag?: number;
    /** 提料采购订单详情主键ID */
    detailId?: string;
    /** 克重 */
    gramWeight?: number;
    /** 克重单位 */
    gramWeightUnit?: string;
    /** 库存id */
    inventoryId?: number;
    /** 经纬密度 */
    longitudeAndLatitudeDensity?: string;
    /** 物料编码 */
    materialCode?: string;
    /** 物料主键ID */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 物料类型：面料、辅料 */
    materialType?: string;
    /** 物料类型：面料、辅料 */
    materialTypeName?: string;
    /** 提料数量 */
    pickupNumber?: number;
    /** 系数 */
    purchaseCoefficient?: number;
    /** 主键ID */
    purchaseOrderId?: string;
    /** 提料采购单号 */
    purchaseOrderNo?: string;
    /** 采购单价_不含税 */
    purchasePriceNoTax?: number;
    /** 采购单价_含税 */
    purchasePriceWithTax?: number;
    /** 采购申请详情主键ID */
    purchaseRequisitionDetailId?: string;
    /** 提料采购单ID */
    purchaseRequisitionId?: string;
    /** 提料申请单号 */
    purchaseRequisitionNo?: string;
    /** 采购单位 */
    purchaseUnit?: string;
    /** 采购单位 */
    purchaseUnitName?: string;
    /** 行号 */
    rowNumber?: number;
    /** 规格 */
    specification?: string;
    /** 供应商色号 */
    supplierColorNo?: string;
    /** 供应商货号 */
    supplierGoodsNo?: string;
    /** 税额 */
    taxAmount?: number;
    /** 税码 */
    taxCode?: string;
    /** 租户ID */
    tenantId?: string;
  };

  type PickupPurchaseOrderQuery = {
    /** 快筛预约送货 */
    appointment?: string;
    /** 采购员ID 列表 */
    buyerIds?: number[];
    /** 采购员名称 */
    buyerNameLike?: string;
    /** 物料色号 (从物料编码中带出) (模糊搜索) */
    colorNumberLike?: string;
    /** 创建人名称 */
    createNameLike?: string;
    /** 主键ID */
    detailId?: number[];
    /** 导出ID */
    exLongs?: number[];
    /** 物料编码 (模糊搜索) */
    materialCodeLike?: string;
    /** 物料名称 (模糊搜索) */
    materialNameLike?: string;
    /** 物料类型：面料、辅料 */
    materialType?: string;
    /** 采购单id */
    purchaseOrderId: number;
    /** 提料采购单号 (模糊搜索) */
    purchaseOrderNoLike?: string;
    /** 提料采购单号，多个 */
    purchaseOrderNos?: string[];
    /** 主键ID */
    purchaseRequisitionIds?: number[];
    /** 提料申请单号 (模糊搜索) */
    purchaseRequisitionNoLike?: string;
    /** 快筛待质检 */
    quality?: string;
    /** 规格 (模糊搜索) */
    specificationLike?: string;
    /** 状态 (快捷筛选~) */
    statuses?: string[];
    /** 供应商色号 (模糊搜索) */
    supplierColorNoLike?: string;
    /** 供应商货号 (模糊搜索) */
    supplierGoodsNoLike?: string;
  };

  type PickupPurchaseOrderUpdateCmd = {
    /** 采购员ID */
    buyerId: number;
    /** 物料中品类ID */
    materialCategoryMediumId: number;
    /** 物料中品类名称 */
    materialCategoryMediumName: string;
    /** 物料编码 */
    materialCode: string;
    /** 物料图片 (',' 分隔) */
    materialFiles: string;
    /** 物料标记 */
    materialFlag: string;
    /** 物料主键ID */
    materialId: number;
    /** 物料名称 */
    materialName: string;
    /** 常备物料标识 (1: 常备物料, 0: 非常备物料) */
    materialStandingFlag: number;
    /** 物料类型：面料、辅料 */
    materialType: string;
    /** 主键ID */
    purchaseOrderId: number;
    /** 提料采购单号 */
    purchaseOrderNo: string;
    /** 提料申请单号 */
    purchaseRequisitionNo: string;
    /** 接单人 */
    receiveBy: number;
    /** 接单时间 */
    receiveTime: string;
    /** 供应商编码 */
    supplierCode: string;
    /** 供应商色号 */
    supplierColorNo: string;
    /** 供应商货号 */
    supplierGoodsNo: string;
    /** 供应商 ID */
    supplierId: number;
    /** 供应商名称 */
    supplierName: string;
    /** 租户ID */
    tenantId: number;
  };

  type PickupPurchaseReceiveOrderUpdateCmd = {
    /** 主键ID */
    detailIds: number[];
  };

  type PickupPurchaseRequisitionCreateCmd = {
    /** 提料清单ID 列表 */
    pickupListIds: number[];
  };

  type PickupPurchaseRequisitionDTO = {
    /** 调料设计号 */
    allocateDesignNo?: string;
    /** 调料设计师 */
    allocateDesignerId?: string;
    /** 调料设计师名称 */
    allocateDesignerName?: string;
    /** 调料单号 */
    allocateOrderNo?: string;
    /** 申请终止人 */
    applyTerminationBy?: string;
    /** 申请终止 (库存处理: 0: 归还保留, 1: 盘亏) */
    applyTerminationFlag?: number;
    /** 申请终止时间 */
    applyTerminationTime?: string;
    /** 审批人 */
    approveBy?: string;
    /** 审批人名称 */
    approveByName?: string;
    /** 审批标记 (1: 不通过, 0: 通过) */
    approveFlag?: number;
    /** 审批时间 */
    approveTime?: string;
    /** 可用库存量 */
    availableStockQuantity?: number;
    /** 基本单价 */
    basePrice?: number;
    /** 基本单位 */
    baseUnit?: string;
    /** 基本单位 */
    baseUnitName?: string;
    /** 批次id */
    batchId?: string;
    /** 批次号 */
    batchNo?: string;
    /** 批次状态 */
    batchStatus?: string;
    /** 批次状态 */
    batchStatusName?: string;
    /** 业务详情行id */
    businessDetailId?: number;
    /** 业务单号 */
    businessOrderNo?: string;
    /** 采购员ID */
    buyerId?: string;
    /** 采购员名称 */
    buyerName?: string;
    /** Color色色号 */
    color?: string;
    /** color_base_id, 颜色表ID */
    colorBaseId?: string;
    /** 物料色号 (从物料编码中带出) */
    colorNumber?: string;
    /** 创建人 */
    createBy?: string;
    /** 创建人名称 */
    createByName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 删除标记 (1: 删除 0: 未删除) */
    deleteFlag?: number;
    /** 设计ID */
    designId?: string;
    /** 设计号 */
    designNo?: string;
    /** 设计号库存量 */
    designNoStockQuantity?: number;
    /** 设计师 ID */
    designerId?: string;
    /** 设计师名称 */
    designerName?: string;
    /** 在仓期 (天) */
    inWarehouseDay?: number;
    /** 库存ID */
    inventoryId?: number;
    /** 锁定库存量 */
    lockingStockQuantity?: number;
    /** 物料中品类ID */
    materialCategoryMediumId?: string;
    /** 物料中品类名称 */
    materialCategoryMediumName?: string;
    /** 物料编码 */
    materialCode?: string;
    /** 物料图片列表 */
    materialFileUrls?: string[];
    /** 物料标记 */
    materialFlag?: string;
    /** 物料主键ID */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 常备物料标识 (1: 常备物料, 0: 非常备物料) */
    materialStandingFlag?: number;
    /** 物料类型：面料、辅料 */
    materialType?: string;
    /** 物料类型：面料、辅料 */
    materialTypeName?: string;
    /** 修改人 */
    modifyBy?: string;
    /** 修改人名称 */
    modifyByName?: string;
    /** 修改时间 */
    modifyTime?: string;
    /** 现有库存量 */
    onHandInventory?: number;
    /** 操作标记 (0: 提料, 1: 保留) */
    operateFlag?: number;
    /** 供应商色号 */
    orgSupplierColorCode?: string;
    /** 原系列 */
    originalSeries?: string;
    /** 库存归属方 */
    ownnerId?: string;
    /** 库存归属方 */
    ownnerName?: string;
    /** 潘通色色号 */
    pantone?: string;
    /** 提料数量 */
    pickupNumber?: number;
    /** 库存归属计划方 */
    plannerId?: string;
    /** 库存归属计划方 */
    plannerName?: string;
    /** 系数 */
    purchaseCoefficient?: number;
    /** 采购单价 */
    purchasePrice?: number;
    /** 提料申请单详情ID */
    purchaseRequisitionDetailId?: number;
    /** 提料申请单号id */
    purchaseRequisitionId?: string;
    /** 提料申请单号 */
    purchaseRequisitionNo?: string;
    /** 最近一条备注 */
    remark?: string;
    /** 备注数量 */
    remarkNumber?: number;
    /** 行号 */
    rowNumber?: number;
    /** 系列 */
    series?: string;
    /** 系列 */
    seriesName?: string;
    /** 共享库存量 */
    sharedStockQuantity?: number;
    /** 规格 */
    specification?: string;
    /** 标准色 */
    standardColor?: string;
    /** 状态 */
    status?: string;
    /** 状态标注 () */
    statusLabel?: string;
    /** 状态名 */
    statusName?: string;
    /** 风格 */
    style?: string;
    /** 风格 */
    styleName?: string;
    /** 提交人 */
    submitBy?: string;
    /** 提交人名称 */
    submitByName?: string;
    /** 提交标记 (1: 已提交, 0: 未提交) */
    submitFlag?: number;
    /** 提交时间 */
    submitTime?: string;
    /** 供应商编码 */
    supplierCode?: string;
    /** 供应商色号 */
    supplierColorNo?: string;
    /** 供应商货号 */
    supplierGoodsNo?: string;
    /** 供应商 ID */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
    /** 租户ID */
    tenantId?: string;
    /** 缸号 */
    vatNo?: string;
    /** 版本号 */
    version?: number;
    /** 仓库编码 */
    warehouseCode?: string;
    /** 仓库主键ID */
    warehouseId?: string;
    /** 仓库名称 */
    warehouseName?: string;
    /** 仓库类型code(数据字典) */
    warehouseTypeCode?: string;
    /** 仓库类型 */
    warehouseTypeName?: string;
  };

  type PickupPurchaseRequisitionDetailDTO = {
    /** 调料设计号 */
    allocateDesignNo?: string;
    /** 调料设计师 */
    allocateDesignerId?: string;
    /** 调料设计师名称 */
    allocateDesignerName?: string;
    /** 调料单号 */
    allocateOrderNo?: string;
    /** 申请终止人 */
    applyTerminationBy?: string;
    /** 申请终止 (库存处理: 0: 归还保留, 1: 盘亏) */
    applyTerminationFlag?: number;
    /** 申请终止时间 */
    applyTerminationTime?: string;
    /** 可用库存量 */
    availableStockQuantity?: number;
    /** 基本单价 */
    basePrice?: number;
    /** 基本单位 */
    baseUnit?: string;
    /** 批次id */
    batchId?: string;
    /** 批次号 */
    batchNo?: string;
    /** 批次状态 */
    batchStatus?: string;
    /** 业务详情行id */
    businessDetailId?: number;
    /** 业务单号 */
    businessOrderNo?: string;
    /** 采购员ID */
    buyerId?: string;
    /** 采购员名称 */
    buyerName?: string;
    /** Color色色号 */
    color?: string;
    /** color_base_id, 颜色表ID */
    colorBaseId?: string;
    /** 物料色号 (从物料编码中带出) */
    colorNumber?: string;
    /** 创建人 */
    createBy?: string;
    /** 创建人名称 */
    createByName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 删除标记 (1: 删除 0: 未删除) */
    deleteFlag?: number;
    /** 设计ID */
    designId?: string;
    /** 设计号 */
    designNo?: string;
    /** 设计号库存量 */
    designNoStockQuantity?: number;
    /** 设计师 ID */
    designerId?: string;
    /** 设计师名称 */
    designerName?: string;
    /** 主键ID */
    detailId?: string;
    /** 在仓期 (天) */
    inWarehouseDay?: number;
    /** 主键ID */
    inventoryId?: string;
    /** 锁定库存量 */
    lockingStockQuantity?: number;
    /** 物料中品类ID */
    materialCategoryMediumId?: string;
    /** 物料中品类名称 */
    materialCategoryMediumName?: string;
    /** 物料编码 */
    materialCode?: string;
    /** 物料图片列表 */
    materialFileUrls?: string[];
    /** 物料图片 (',' 分隔) */
    materialFiles?: string;
    /** 物料标记 */
    materialFlag?: string;
    /** 物料主键ID */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 常备物料标识 (1: 常备物料, 0: 非常备物料) */
    materialStandingFlag?: number;
    /** 物料类型：面料、辅料 */
    materialType?: string;
    /** 物料类型：面料、辅料 */
    materialTypeName?: string;
    /** 修改人 */
    modifyBy?: string;
    /** 修改人名称 */
    modifyByName?: string;
    /** 修改时间 */
    modifyTime?: string;
    /** 现有库存量 */
    onHandInventory?: number;
    /** 操作标记 (0: 提料, 1: 保留) */
    operateFlag?: number;
    /** 供应商色号 */
    orgSupplierColorCode?: string;
    /** 原系列 */
    originalSeries?: string;
    /** 库存归属方 */
    ownnerId?: string;
    /** 库存归属方 */
    ownnerName?: number;
    /** 潘通色色号 */
    pantone?: string;
    /** 提料清单表ID */
    pickupListId?: string;
    /** 提料数量 */
    pickupNumber?: number;
    /** 库存归属计划方 */
    plannerId?: string;
    /** 库存归属计划方 */
    plannerName?: number;
    /** 系数 */
    purchaseCoefficient?: number;
    /** 采购单价 */
    purchasePrice?: number;
    /** 主键ID */
    purchaseRequisitionId?: string;
    /** 最近一条备注 */
    remark?: string;
    /** 备注数量 */
    remarkNumber?: number;
    /** 行号 */
    rowNumber?: number;
    /** 系列 */
    series?: string;
    /** 共享库存量 */
    sharedStockQuantity?: number;
    /** 规格 */
    specification?: string;
    /** 状态 */
    status?: string;
    /** 风格 */
    style?: string;
    /** 供应商编码 */
    supplierCode?: string;
    /** 供应商色号 */
    supplierColorNo?: string;
    /** 供应商货号 */
    supplierGoodsNo?: string;
    /** 供应商 ID */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
    /** 租户ID */
    tenantId?: string;
    /** 缸号 */
    vatNo?: string;
    /** 版本号 */
    version?: number;
    /** 仓库编码 */
    warehouseCode?: string;
    /** 仓库主键ID */
    warehouseId?: string;
    /** 仓库名称 */
    warehouseName?: string;
    /** 仓库类型code(数据字典) */
    warehouseTypeCode?: string;
  };

  type PickupPurchaseRequisitionDetailInfoDTO = {
    /** 详情行信息 */
    details?: PickupPurchaseRequisitionDetailsDTO[];
    /** 物料中品类ID */
    materialCategoryMediumId?: string;
    /** 物料中品类名称 */
    materialCategoryMediumName?: string;
    /** 提料申请单号ID */
    purchaseRequisitionId?: string;
    /** 提料申请单号 */
    purchaseRequisitionNo?: string;
    /** 系列 */
    series?: string;
    /** 系列名 */
    seriesName?: string;
    /** 风格 */
    style?: string;
    /** 风格名 */
    styleName?: string;
  };

  type PickupPurchaseRequisitionDetailsDTO = {
    /** 调料设计号 */
    allocateDesignNo?: string;
    /** 调料设计师 */
    allocateDesignerId?: string;
    /** 调料设计师名称 */
    allocateDesignerName?: string;
    /** 调料单号 */
    allocateOrderNo?: string;
    /** 可用库存量 */
    availableStockQuantity?: number;
    /** 基本单价 */
    basePrice?: number;
    /** 基本单位 */
    baseUnit?: string;
    /** 基本单位 */
    baseUnitName?: string;
    /** 批次id */
    batchId?: string;
    /** 批次号 */
    batchNo?: string;
    /** 批次状态 */
    batchStatus?: string;
    /** 批次状态 */
    batchStatusName?: string;
    /** 采购员ID */
    buyerId?: string;
    /** 采购员名称 */
    buyerName?: string;
    /** Color色色号 */
    color?: string;
    /** color_base_id, 颜色表ID */
    colorBaseId?: string;
    /** 物料色号 (从物料编码中带出) */
    colorNumber?: string;
    /** 创建人 */
    createBy?: string;
    /** 创建人名称 */
    createByName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 删除标记 (1: 删除 0: 未删除) */
    deleteFlag?: number;
    /** 设计ID */
    designId?: string;
    /** 设计号 */
    designNo?: string;
    /** 设计号库存量 */
    designNoStockQuantity?: number;
    /** 设计师 ID */
    designerId?: string;
    /** 设计师名称 */
    designerName?: string;
    /** 在仓期 (天) */
    inWarehouseDay?: number;
    /** 主键ID */
    inventoryId?: string;
    /** 锁定库存量 */
    lockingStockQuantity?: number;
    /** 物料中品类ID */
    materialCategoryMediumId?: string;
    /** 物料中品类名称 */
    materialCategoryMediumName?: string;
    /** 物料编码 */
    materialCode?: string;
    /** 物料标记 */
    materialFlag?: string;
    /** 物料主键ID */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 常备物料标识 (1: 常备物料, 0: 非常备物料) */
    materialStandingFlag?: number;
    /** 物料类型：面料、辅料 */
    materialType?: string;
    /** 物料类型：面料、辅料 */
    materialTypeName?: string;
    /** 修改人 */
    modifyBy?: string;
    /** 修改人名称 */
    modifyByName?: string;
    /** 修改时间 */
    modifyTime?: string;
    /** 现有库存量 */
    onHandInventory?: number;
    /** 操作标记 (0: 提料, 1: 保留) */
    operateFlag?: number;
    /** 供应商色号 */
    orgSupplierColorCode?: string;
    /** 原系列 */
    originalSeries?: string;
    /** 库存归属方 */
    ownnerId?: string;
    /** 库存归属方 */
    ownnerName?: string;
    /** 潘通色色号 */
    pantone?: string;
    /** 提料清单表ID */
    pickupListId?: string;
    /** 提料数量 */
    pickupNumber?: number;
    /** 库存归属计划方 */
    plannerId?: string;
    /** 库存归属计划方 */
    plannerName?: string;
    /** 系数 */
    purchaseCoefficient?: number;
    /** 采购单价 */
    purchasePrice?: number;
    /** 提料申请单号ID */
    purchaseRequisitionDetailId?: number;
    /** 主键ID */
    purchaseRequisitionId?: string;
    /** 提料申请单号 */
    purchaseRequisitionNo?: string;
    /** 最近一条备注 */
    remark?: string;
    /** 备注数量 */
    remarkNumber?: number;
    /** 行号 */
    rowNumber?: number;
    /** 系列 */
    series?: string;
    /** 共享库存量 */
    sharedStockQuantity?: number;
    /** 规格 */
    specification?: string;
    /** 标准色 */
    standardColor?: string;
    /** 状态 */
    status?: string;
    /** 状态名 */
    statusName?: string;
    /** 风格 */
    style?: string;
    /** 供应商编码 */
    supplierCode?: string;
    /** 供应商色号 */
    supplierColorNo?: string;
    /** 供应商货号 */
    supplierGoodsNo?: string;
    /** 供应商 ID */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
    /** 租户ID */
    tenantId?: string;
    /** 缸号 */
    vatNo?: string;
    /** 版本号 */
    version?: number;
    /** 仓库编码 */
    warehouseCode?: string;
    /** 仓库主键ID */
    warehouseId?: string;
    /** 仓库名称 */
    warehouseName?: string;
    /** 仓库类型code(数据字典) */
    warehouseTypeCode?: string;
    /** 仓库类型code(数据字典) */
    warehouseTypeCodeName?: string;
  };

  type PickupPurchaseRequisitionQuery = {
    /** 审批标记 (1: 不通过, 0: 通过) */
    approveFlag?: number;
    /** 批次号 (模糊搜索) */
    batchNoLike?: string;
    /** 采购员ID 列表 */
    buyerIds?: number[];
    /** 采购员名称 */
    buyerNameLike?: string;
    /** 物料色号 (从物料编码中带出) (模糊搜索) */
    colorNumberLike?: string;
    /** 创建人id,多个 */
    createBys?: number[];
    /** 创建人名称 */
    createNameLike?: string;
    /** 当前页号（取值从1开始） */
    current?: number;
    /** 物料编码 (模糊搜索) */
    materialCodeLike?: string;
    /** 物料名称 (模糊搜索) */
    materialNameLike?: string;
    /** 物料类型：面料、辅料 */
    materialType?: string;
    /** 排序设置列表 */
    orders?: Order[];
    /** 提料申请单详情id，多个 */
    purchaseRequisitionDetailIds?: number[];
    /** 提料申请单id，多个 */
    purchaseRequisitionIds?: number[];
    /** 提料申请单号 (模糊搜索) */
    purchaseRequisitionNoLike?: string;
    /** 每页显示条数 */
    size?: number;
    /** 状态 (快捷筛选~) '0' :提料 , '1': 保留 , 'T64': 待审批 ,'T30':已终止 */
    statuses?: string[];
    /** 提交标记 (1: 已提交, 0: 未提交) */
    submitFlag?: number;
    /** 供应商色号 (模糊搜索) */
    supplierColorNoLike?: string;
    /** 供应商货号 (模糊搜索) */
    supplierGoodsNoLike?: string;
  };

  type PickupPurchaseRequisitionSubmitCmd = {
    /** 调料设计号 */
    allocateDesignNo: string;
    /** 操作标记 (0: 提料, 1: 保留) */
    operateFlag: number;
    /** 提料申请详情行id */
    purchaseRequisitionDetailId: number;
    /** 提料申请单号id */
    purchaseRequisitionId: number;
  };

  type PickupPurchaseRequisitionUpdateCmd = {
    /** 审批人 */
    approveBy: number;
    /** 审批标记 (1: 不通过, 0: 通过) */
    approveFlag: number;
    /** 审批时间 */
    approveTime: string;
    /** 业务单号(目前指的是备料单号) */
    businessOrderNo?: string;
    /** 物料中品类名称 */
    materialCategoryMediumName: string;
    /** 原系列 */
    originalSeries: string;
    /** 主键ID */
    purchaseRequisitionId: number;
    /** 提料申请单号 */
    purchaseRequisitionNo: string;
    /** 系列 */
    series: string;
    /** 风格 */
    style: string;
    /** 提交人 */
    submitBy: number;
    /** 提交标记 (1: 已提交, 0: 未提交) */
    submitFlag: number;
    /** 提交时间 */
    submitTime: string;
    /** 租户ID */
    tenantId: number;
  };

  type PickupRemarkCreateCmd = {
    /** 业务类型 (0: 提料采购申请, 1: 提料采购管理) */
    businessType: number;
    /** 标记 (apply_termination : 申请终止, approve_termination : 审批终止) */
    markCode?: string;
    /** 关联主键ID */
    pickupIds: number[];
    /** 备注 */
    remark: string;
  };

  type PickupRemarkDTO = {
    /** 业务类型 (0: 提料采购申请, 1: 提料采购管理) */
    businessType?: number;
    /** 创建人 */
    createBy?: string;
    /** 创建人名称 */
    createByName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 删除标记(1:删除, 0:未删除) */
    deleteFlag?: number;
    /** 标记 (apply_termination : 申请终止, approve_termination : 审批终止) */
    markCode?: string;
    /** 修改人 */
    modifyBy?: string;
    /** 修改人名称 */
    modifyByName?: string;
    /** 修改时间 */
    modifyTime?: string;
    /** 关联主键ID */
    pickupId?: string;
    /** 备注 */
    remark?: string;
    /** 主键ID */
    remarkId?: string;
    /** 租户ID */
    tenantId?: string;
    /** 版本号 */
    version?: number;
  };

  type QCReturnLockCmd = {
    /** 库存id */
    inventoryId?: string;
    /** 锁定时间(锁定开始时间),可为空 */
    lockBeginTime?: string;
    /** 锁定数量 */
    lockCount?: string;
    /** 释放时间(锁定结束时间),可为空 */
    lockEndTime?: string;
    /** 来源单据ID */
    sourceBillId?: string;
  };

  type ResponseDataAdjustOrderDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: AdjustOrderDTO;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataAllocationOrderBatchVatDiffDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: AllocationOrderBatchVatDiffDTO;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataAllocationOrderCountDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: AllocationOrderCountDTO;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataAllocationOrderDetailHeadDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: AllocationOrderDetailHeadDTO;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataInventoryGroupDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: InventoryGroupDTO;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataInventoryGroupUpdateDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: InventoryGroupUpdateDTO;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataListAdjustOrderDetailDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: AdjustOrderDetailDTO[];
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataListAllocationOrderByDesNoDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: AllocationOrderByDesNoDTO[];
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataListAllocationOrderResultDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: AllocationOrderResultDTO[];
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataListInventoryLockDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: InventoryLockDTO[];
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataListInvtInventoryMoveHistoryWebDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: InvtInventoryMoveHistoryWebDTO[];
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataListPickupPurchaseOrderDetailDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: PickupPurchaseOrderDetailDTO[];
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataListPickupPurchaseOrderPrintDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: PickupPurchaseOrderPrintDTO[];
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataListWarehouseBatchInfoDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: WarehouseBatchInfoDTO[];
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataListWarehouseDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: WarehouseDTO[];
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataListWarehouseDistrictConfigurationDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: WarehouseDistrictConfigurationDTO[];
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataListWarehouseDistrictDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: WarehouseDistrictDTO[];
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataListWarehouseDistrictInfoDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: WarehouseDistrictInfoDTO[];
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataListWarehouseInventoryBaseInfoDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: WarehouseInventoryBaseInfoDTO[];
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataListWarehouseInventoryDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: WarehouseInventoryDTO[];
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataListWarehouseInventoryDetailDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: WarehouseInventoryDetailDTO[];
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataListWarehouseInventoryInfoDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: WarehouseInventoryInfoDTO[];
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataListWarehouseInventoryOccupationDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: WarehouseInventoryOccupationDTO[];
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataListWarehouseInventoryOwnnerDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: WarehouseInventoryOwnnerDTO[];
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataListWarehouseInventoryPlannerDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: WarehouseInventoryPlannerDTO[];
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataListWarehouseVatInfoDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: WarehouseVatInfoDTO[];
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataListlong = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: number[];
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataListstring = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: string[];
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataMtrAdjustOrderDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: MtrAdjustOrderDTO;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataPageResultAdjustOrderInfoDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: PageResultAdjustOrderInfoDTO;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataPageResultAllocationOrderResultDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: PageResultAllocationOrderResultDTO;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataPageResultInventoryGroupDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: PageResultInventoryGroupDTO;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataPageResultInvtInventoryMoveHistoryWebDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: PageResultInvtInventoryMoveHistoryWebDTO;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataPageResultInvtInventorySupplierMoveHistoryWebDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: PageResultInvtInventorySupplierMoveHistoryWebDTO;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataPageResultPickupListDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: PageResultPickupListDTO;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataPageResultPickupPurchaseOrderDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: PageResultPickupPurchaseOrderDTO;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataPageResultPickupPurchaseOrderDetailDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: PageResultPickupPurchaseOrderDetailDTO;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataPageResultPickupPurchaseRequisitionDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: PageResultPickupPurchaseRequisitionDTO;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataPageResultPickupPurchaseRequisitionDetailDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: PageResultPickupPurchaseRequisitionDetailDTO;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataPageResultPickupRemarkDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: PageResultPickupRemarkDTO;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataPageResultWarehouseBatchInfoDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: PageResultWarehouseBatchInfoDTO;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataPageResultWarehouseDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: PageResultWarehouseDTO;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataPageResultWarehouseDistrictDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: PageResultWarehouseDistrictDTO;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataPageResultWarehouseInventoryBaseInfoDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: PageResultWarehouseInventoryBaseInfoDTO;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataPageResultWarehouseInventoryBatchInfoDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: PageResultWarehouseInventoryBatchInfoDTO;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataPageResultWarehouseInventoryDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: PageResultWarehouseInventoryDTO;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataPageResultWarehouseInventoryDetailDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: PageResultWarehouseInventoryDetailDTO;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataPageResultWarehouseInventoryExternalDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: PageResultWarehouseInventoryExternalDTO;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataPageResultWarehouseInventoryInfoDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: PageResultWarehouseInventoryInfoDTO;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataPageResultWarehouseInventoryOccupationDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: PageResultWarehouseInventoryOccupationDTO;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataPageResultWarehouseInventorySAPInfoDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: PageResultWarehouseInventorySAPInfoDTO;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataPageResultWarehouseVatInfoDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: PageResultWarehouseVatInfoDTO;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataPickupListDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: PickupListDTO;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataPickupListSummaryDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: PickupListSummaryDTO;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataPickupPurchaseOrderDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: PickupPurchaseOrderDTO;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataPickupPurchaseRequisitionDetailInfoDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: PickupPurchaseRequisitionDetailInfoDTO;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataVoid = {
    arguments?: Record<string, any>[];
    code?: string;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataWarehouseBatchInfoDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: WarehouseBatchInfoDTO;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataWarehouseDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: WarehouseDTO;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataWarehouseDistrictDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: WarehouseDistrictDTO;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataWarehouseInventoryCountDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: WarehouseInventoryCountDTO;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataWarehouseInventoryDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: WarehouseInventoryDTO;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataWarehouseInventoryDetailDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: WarehouseInventoryDetailDTO;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataWarehouseInventoryGroupSumDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: WarehouseInventoryGroupSumDTO;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataWarehouseInventoryOccupationDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: WarehouseInventoryOccupationDTO;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataWarehouseVatInfoDTO = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: WarehouseVatInfoDTO;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDatabigdecimal = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: number;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDataboolean = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: boolean;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDatalong = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: number;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type ResponseDatastring = {
    arguments?: Record<string, any>[];
    code?: string;
    data?: string;
    defaultMessages?: string;
    message?: string;
    success?: boolean;
    timestamp?: number;
  };

  type SupplierBaseInfoDTO = {
    /** 供应商编码 */
    supplierCode?: string;
    /** 供应商id */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
    supplierShortName?: string;
  };

  type View = {
    contentType?: string;
  };

  type WarehouseBaseInfoDTO = {
    /** sap仓库id */
    sapWarehouseId?: string;
    /** SAP仓库名称 */
    sapWarehouseName?: string;
    /** SCP仓库编码 */
    scpWarehouseCode?: string;
    /** 仓库类型(code) */
    typeCode?: string;
    /** 仓库类型(名称) */
    typeName?: string;
    /** 仓库编码 */
    warehouseCode?: string;
    /** 仓库id */
    warehouseId?: string;
    /** 仓库名称 */
    warehouseName?: string;
  };

  type WarehouseBatchBaseInfoDTO = {
    /** 批次id */
    batchId?: string;
    /** 批次号 */
    batchNo?: string;
    /** 批次状态(code) */
    batchStatusCode?: string;
    /** 批次状态(名称) */
    batchStatusName?: string;
  };

  type WarehouseBatchInfoCreateCmd = {
    /** 有效标记 1：禁用 0：有效 */
    activeFlag: number;
    /** 批次号 */
    batchNo: string;
    /** 批次状态code(数据字典) */
    batchStatusCode: string;
    /** 单据类型code(数据字典) */
    billTypeCode: string;
    /** 来源单据ID */
    sourceBillId: number;
    /** 租户ID */
    tenantId: number;
  };

  type WarehouseBatchInfoDTO = {
    /** 有效标记 1：禁用 0：有效 */
    activeFlag?: number;
    /** 主键id */
    batchId?: string;
    /** 批次号 */
    batchNo?: string;
    /** 批次状态code(数据字典) */
    batchStatusCode?: string;
    /** 单据类型code(数据字典) */
    billTypeCode?: string;
    /** 创建人 */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 删除标记 1： 删除 0：未删除 */
    deleteFlag?: number;
    /** 修改人 */
    modifyBy?: string;
    /** 修改时间 */
    modifyTime?: string;
    /** 来源单据ID */
    sourceBillId?: string;
    /** 租户ID */
    tenantId?: string;
    /** 版本号 */
    version?: number;
  };

  type WarehouseBatchInfoUpdateCmd = {
    /** 有效标记 1：禁用 0：有效 */
    activeFlag: number;
    /** 主键id */
    batchId: number;
    /** 批次号 */
    batchNo: string;
    /** 批次状态code(数据字典) */
    batchStatusCode: string;
    /** 单据类型code(数据字典) */
    billTypeCode: string;
    /** 来源单据ID */
    sourceBillId: number;
    /** 租户ID */
    tenantId: number;
  };

  type WarehouseCreateCmd = {
    /** 有效标记 1：禁用 0：有效 */
    activeFlag: number;
    /** 地址 */
    address: string;
    /** 城市 */
    city: string;
    /** 客户id */
    clientId: number;
    /** 客户名称 */
    clientName: string;
    /** 联系人 */
    contactPerson: string;
    /** 联系电话 */
    contactPhone: string;
    /** 国家 */
    country: string;
    /** 首选标记 0:非首选 1:首选 */
    primaryFlag: number;
    /** 省份 */
    province: string;
    /** 租户ID */
    tenantId: number;
    /** 仓库类型code(数据字典) */
    typeCode: string;
    /** 仓库编码 */
    warehouseCode: string;
    /** 仓库名称 */
    warehouseName: string;
  };

  type WarehouseDTO = {
    /** 有效标记 1：禁用 0：有效 */
    activeFlag?: number;
    /** 地址 */
    address?: string;
    /** 城市 */
    city?: string;
    /** 客户id */
    clientId?: string;
    /** 客户名称 */
    clientName?: string;
    /** 联系人 */
    contactPerson?: string;
    /** 联系电话 */
    contactPhone?: string;
    /** 国家 */
    country?: string;
    /** 创建人 */
    createBy?: string;
    /** 创建人(名称) */
    createByName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 删除标记 1： 删除 0：未删除 */
    deleteFlag?: number;
    /** 修改人 */
    modifyBy?: string;
    /** 修改人(名称) */
    modifyByName?: string;
    /** 修改时间 */
    modifyTime?: string;
    /** 首选标记 0:非首选 1:首选 */
    primaryFlag?: number;
    /** 省份 */
    province?: string;
    /** 租户ID */
    tenantId?: string;
    /** 仓库类型code(数据字典) */
    typeCode?: string;
    /** 仓库类型名称(数据字典) */
    typeName?: string;
    /** 版本号 */
    version?: number;
    /** 仓库编码 */
    warehouseCode?: string;
    /** 库存地列表 */
    warehouseDistricts?: WarehouseDistrictDTO[];
    /** 主键id */
    warehouseId?: string;
    /** 仓库名称 */
    warehouseName?: string;
  };

  type WarehouseDistrictConfigurationDTO = {
    /** 首选标记 0:非首选 1:首选 */
    primaryFlag?: number;
    /** 库存地编码 */
    warehouseDistrictCode?: string;
    /** 库存地主键id */
    warehouseDistrictId?: string;
    /** 库存地名称 */
    warehouseDistrictName?: string;
    /** 库存地类型code(数据字典) */
    warehouseDistrictTypeCode?: string;
    /** 库存地类型名称 */
    warehouseDistrictTypeName?: string;
  };

  type WarehouseDistrictConfigurationQuery = {
    /** 禁启用状态 */
    activeFlag?: number;
    /** 单据类型code(数据字典) */
    billTypeCode?: string;
    /** 客户id */
    clientId?: string;
    /** 物料类型code(数据字典) */
    materialCategoryCode?: string;
    /** 租户id */
    tenantId?: number;
    /** 库存地类型code(数据字典) */
    warehouseDistrictTypeCode?: string;
    /** 库存地类型code(数据字典) */
    warehouseDistrictTypeCodes?: string[];
    /** 仓库类型code(数据字典) */
    warehouseTypeCode?: string;
  };

  type WarehouseDistrictCreateCmd = {
    /** 有效标记 1：禁用 0：有效 */
    activeFlag: number;
    /** 地址 */
    address: string;
    /** 联系人 */
    contactPerson: string;
    /** 联系电话 */
    contactPhone: string;
    /** 首选标记 0:非首选 1:首选 */
    primaryFlag: number;
    /** 库存地状态code(数据字典) */
    statusCode: string;
    /** 租户ID */
    tenantId: number;
    /** 库存地类型code(数据字典) */
    typeCode: string;
    /** 仓库编码 */
    warehouseCode: string;
    /** 库存地编码 */
    warehouseDistrictCode: string;
    /** 库存地名称 */
    warehouseDistrictName: string;
    /** 仓库ID */
    warehouseId: number;
  };

  type WarehouseDistrictDTO = {
    /** 有效标记 1：禁用 0：有效 */
    activeFlag?: number;
    /** 地址 */
    address?: string;
    /** 联系人 */
    contactPerson?: string;
    /** 联系电话 */
    contactPhone?: string;
    /** 创建人 */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 删除标记 1： 删除 0：未删除 */
    deleteFlag?: number;
    /** 修改人 */
    modifyBy?: string;
    /** 修改时间 */
    modifyTime?: string;
    /** 首选标记 0:非首选 1:首选 */
    primaryFlag?: number;
    /** 库存地状态code(数据字典) */
    statusCode?: string;
    /** 租户ID */
    tenantId?: string;
    /** 库存地类型code(数据字典) */
    typeCode?: string;
    /** 版本号 */
    version?: number;
    /** 仓库编码 */
    warehouseCode?: string;
    /** 库存地编码 */
    warehouseDistrictCode?: string;
    /** 主键id */
    warehouseDistrictId?: string;
    /** 库存地名称 */
    warehouseDistrictName?: string;
    /** 仓库ID */
    warehouseId?: string;
  };

  type WarehouseDistrictInfoDTO = {
    /** 首选标记 0:非首选 1:首选 */
    primaryFlag?: number;
    /** 租户ID */
    tenantId?: string;
    /** 仓库类型(code) */
    typeCode?: string;
    /** 仓库编码 */
    warehouseCode?: string;
    /** 库存地编码 */
    warehouseDistrictCode?: string;
    /** 库存地主键id */
    warehouseDistrictId?: string;
    /** 库存地名称 */
    warehouseDistrictName?: string;
    /** 库存地类型code(数据字典) */
    warehouseDistrictTypeCode?: string;
    /** 库存地类型名称 */
    warehouseDistrictTypeName?: string;
    /** 仓库id */
    warehouseId?: string;
    /** 仓库名称 */
    warehouseName?: string;
  };

  type WarehouseDistrictUpdateCmd = {
    /** 有效标记 1：禁用 0：有效 */
    activeFlag: number;
    /** 地址 */
    address: string;
    /** 联系人 */
    contactPerson: string;
    /** 联系电话 */
    contactPhone: string;
    /** 首选标记 0:非首选 1:首选 */
    primaryFlag: number;
    /** 库存地状态code(数据字典) */
    statusCode: string;
    /** 租户ID */
    tenantId: number;
    /** 库存地类型code(数据字典) */
    typeCode: string;
    /** 仓库编码 */
    warehouseCode: string;
    /** 库存地编码 */
    warehouseDistrictCode: string;
    /** 主键id */
    warehouseDistrictId: number;
    /** 库存地名称 */
    warehouseDistrictName: string;
    /** 仓库ID */
    warehouseId: number;
  };

  type WarehouseInventoryAllocationInfoDTO = {
    /** 有效标记 1：禁用 0：有效 */
    activeFlag?: number;
    /** 调料设计号 */
    allocateDesignNo?: string;
    /** 调料设计师(名称) */
    allocateDesignerName?: string;
    /** 调料单号 */
    allocateOrderNo?: string;
    /** 备货年份 */
    allocateYear?: number;
    /** 调拨数量 */
    allocationAmount?: number;
    /** 调拨单明细明细id */
    allocationOrderDetailId?: number;
    /** 基本单价 */
    basePrice?: number;
    /** 基本单位 */
    baseUnit?: string;
    /** 基本单位名称 */
    baseUnitName?: string;
    /** 批次信息 */
    batch?: WarehouseBatchBaseInfoDTO;
    /** 品牌id */
    brandId?: number;
    /** 品牌名称 */
    brandName?: string;
    /** 业务明细id */
    businessDetailId?: number;
    /** 创建人 */
    createBy?: string;
    /** 创建人(名称) */
    createByName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 删除标记 1： 删除 0：未删除 */
    deleteFlag?: number;
    /** 设计号 */
    designNo?: string;
    /** 设计师(id) */
    designerId?: string;
    /** 设计师(名称) */
    designerName?: string;
    /** 设计号类型： 1：库存组 0：设计号 */
    designoTypeFlag?: number;
    /** 入库时间 */
    entryTime?: string;
    /** 主键id */
    inventoryId?: string;
    /** 物料信息 */
    material?: MaterialBaseInfoDTO;
    /** 物料颜色信息 */
    materialColor?: MaterialColorBaseInfoDTO;
    /** 修改人 */
    modifyBy?: string;
    /** 修改人(名称) */
    modifyByName?: string;
    /** 修改时间 */
    modifyTime?: string;
    /** 在仓期 */
    onHandDays?: number;
    /** 现有库存量 */
    onHandInventory?: number;
    /** 归属方(编码) */
    ownnerCode?: string;
    /** 归属方(id) */
    ownnerId?: string;
    /** 归属方(名称) */
    ownnerName?: string;
    /** 列表缩略图 */
    picUrl?: string;
    /** 图片 */
    picUrls?: ImageDirectUrlResultDTO[];
    /** 计划方(code) */
    plannerCode?: string;
    /** 计划方(id) */
    plannerId?: string;
    /** 计划方(名称) */
    plannerName?: string;
    /** 采购系数 */
    purchaseCoefficient?: number;
    /** 备料流水号 */
    purchaseOrderNo?: string;
    /** 采购单价 */
    purchasePrice?: number;
    /** 采购单位 */
    purchaseUnit?: string;
    /** 采购单位名称 */
    purchaseUnitName?: string;
    /** 调拨数量 */
    remark?: string;
    /** 预计入库量 */
    scheduledInventory?: number;
    /** 系列 */
    series?: string;
    /** 系列 */
    seriesName?: string;
    /** 尺码 */
    size?: string;
    /** 规格 */
    specification?: string;
    specificationCode?: string;
    /** 常备物料标识 */
    standingMaterialFlag?: string;
    /** 常备物料标识名称 */
    standingMaterialFlagName?: string;
    /** 库存汇总信息 */
    sumInfo?: InventorySumInfoDTO;
    /** 供应商信息 */
    supplier?: SupplierBaseInfoDTO;
    /** 供应商色号 */
    supplierColorNo?: string;
    /** 供应商货号 */
    supplierGoodsNo?: string;
    /** 租户ID */
    tenantId?: string;
    /** 缸号创建时间 */
    vatCreateTime?: string;
    /** 缸号id */
    vatId?: string;
    /** 缸号 */
    vatNo?: string;
    /** 版本号 */
    version?: number;
    /** 仓库信息 */
    warehouse?: WarehouseBaseInfoDTO;
    /** 库存地编码 */
    warehouseDistrictCode?: string;
    /** 库存地id */
    warehouseDistrictId?: string;
    /** 库存地名称 */
    warehouseDistrictName?: string;
    /** 库存地类型code(数据字典) */
    warehouseDistrictTypeCode?: string;
    /** 库存地类型名称 */
    warehouseDistrictTypeName?: string;
    /** 年份 */
    year?: number;
  };

  type WarehouseInventoryBaseInfoDTO = {
    /** 有效标记 1：禁用 0：有效 */
    activeFlag?: number;
    /** 调料设计号 */
    allocateDesignNo?: string;
    /** 调料设计师 */
    allocateDesignerName?: string;
    /** 调料单号 */
    allocateOrderNo?: string;
    /** 基本单价 */
    basePrice?: number;
    /** 基本单位 */
    baseUnit?: string;
    /** 批次id */
    batchId?: string;
    /** 批次号 */
    batchNo?: string;
    /** 批次状态code(数据字典) */
    batchStatusCode?: string;
    /** 品牌id */
    brandId?: number;
    /** 品牌名称 */
    brandName?: string;
    /** 业务明细id */
    businessDetailId?: number;
    /** 创建人 */
    createBy?: string;
    /** 创建人(名称) */
    createByName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 删除标记 1： 删除 0：未删除 */
    deleteFlag?: number;
    /** 设计号 */
    designNo?: string;
    /** 入库时间 */
    entryTime?: string;
    /** 主键id */
    inventoryId?: string;
    /** 物料类型 */
    materialCategoryCode?: string;
    /** 物料编码 */
    materialCode?: string;
    /** 物料色号编码 */
    materialColorCode?: string;
    /** 物料色号id */
    materialColorId?: string;
    /** 物料色号名称 */
    materialColorName?: string;
    /** 物料色号编码 */
    materialColorNumber?: string;
    /** 物料色号名称 */
    materialColorNumberName?: string;
    /** 物料id */
    materialId?: string;
    /** 修改人 */
    modifyBy?: string;
    /** 修改人(名称) */
    modifyByName?: string;
    /** 修改时间 */
    modifyTime?: string;
    /** 在仓期 */
    onHandDays?: number;
    /** 现有库存量 */
    onHandInventory?: number;
    /** 归属方 */
    ownnerId?: string;
    /** 归属方(名称) */
    ownnerName?: string;
    /** 计划方 */
    plannerId?: string;
    /** 计划方(名称) */
    plannerName?: string;
    /** 采购系数 */
    purchaseCoefficient?: number;
    /** 调料备料单号 */
    purchaseOrderNo?: string;
    /** 采购单价 */
    purchasePrice?: number;
    /** 采购单位 */
    purchaseUnit?: string;
    /** 预计入库量 */
    scheduledInventory?: number;
    /** 系列 */
    series?: string;
    /** 系列 */
    seriesName?: string;
    /** 尺码 */
    size?: string;
    /** 规格 */
    specification?: string;
    /** 规格编码 */
    specificationCode?: string;
    /** 库存汇总信息 */
    sumInfo?: InventorySumInfoDTO;
    /** 供应商色号 */
    supplierColorNo?: string;
    /** 供应商货号 */
    supplierGoodsNo?: string;
    /** 供应商id */
    supplierId?: string;
    /** 租户ID */
    tenantId?: string;
    /** 缸号id */
    vatId?: string;
    /** 缸号 */
    vatNo?: string;
    /** 版本号 */
    version?: number;
    /** 仓库编码 */
    warehouseCode?: string;
    /** 库存地编码 */
    warehouseDistrictCode?: string;
    /** 库存地id */
    warehouseDistrictId?: string;
    /** 库存地名称 */
    warehouseDistrictName?: string;
    /** 库存地类型code(数据字典) */
    warehouseDistrictTypeCode?: string;
    /** 仓库id */
    warehouseId?: string;
    /** 仓库名称 */
    warehouseName?: string;
    /** 仓库类型(code) */
    warehouseTypeCode?: string;
    /** 年份 */
    year?: number;
  };

  type WarehouseInventoryBatchInfoDTO = {
    /** 批次id */
    batchId?: string;
    /** 批次号 */
    batchNo?: string;
    /** 批次状态(code) */
    batchStatusCode?: string;
    /** 批次状态(名称) */
    batchStatusName?: string;
    /** 设计号 */
    designNo?: string;
    /** 设计师(id) */
    designerId?: string;
    /** 设计师(名称) */
    designerName?: string;
    /** 入库时间 */
    entryTime?: string;
    /** 主键id */
    inventoryId?: string;
    /** 物料类型 */
    materialCategoryCode?: string;
    /** 物料编码 */
    materialCode?: string;
    /** 物料id */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 列表缩略图 */
    picUrl?: string;
    /** 图片 */
    picUrls?: ImageDirectUrlResultDTO[];
    /** 库存汇总信息 */
    sumInfo?: InventorySumInfoDTO;
  };

  type WarehouseInventoryBatchQuery = {
    /** 有效标记 1：禁用 0：有效 */
    activeFlag?: number;
    /** 批次id */
    batchId?: number;
    /** 批次号 */
    batchNo?: string;
    /** 批次状态 */
    batchStatusCode?: string;
    /** 当前页号（取值从1开始） */
    current?: number;
    /** 设计号 */
    designNo?: string;
    /** 设计师 */
    designerId?: number;
    /** 设计师 */
    designerName?: string;
    /** 主键id */
    inventoryId?: number;
    /** 批量主鍵ID */
    inventoryIds?: number[];
    materialCategoryCode?: string;
    /** 物料编码 */
    materialCode?: string;
    /** 排序设置列表 */
    orders?: Order[];
    /** 每页显示条数 */
    size?: number;
    /** 租户ID */
    tenantId?: number;
  };

  type WarehouseInventoryCountDTO = {
    /** n天内有更新的数量 */
    updateInDaysCount?: number;
  };

  type WarehouseInventoryCreateCmd = {
    /** 有效标记 1：禁用 0：有效 */
    activeFlag: number;
    /** 调料设计号 */
    allocateDesignNo: string;
    /** 调料设计师 */
    allocateDesignerName: string;
    /** 调料单号 */
    allocateOrderNo: string;
    /** 基本单价 */
    basePrice: number;
    /** 基本单位 */
    baseUnit: string;
    /** 批次id */
    batchId: number;
    /** 批次号 */
    batchNo: string;
    /** 批次状态(code) */
    batchStatusCode: string;
    /** 单据类型(code) */
    billTypeCode: string;
    /** 品牌id */
    brandId?: number;
    /** 业务明细id */
    businessDetailId: number;
    /** 设计号 */
    designNo: string;
    /** 库存明细 */
    inventoryDetails: InventoryInnerDetail[];
    /** 物料类型code(数据字典) */
    materialCategoryCode: string;
    /** 物料编码 */
    materialCode: string;
    /** 物料色号编码 */
    materialColorCode: string;
    /** 物料色号id */
    materialColorId: number;
    /** 物料色号名称 */
    materialColorName: string;
    /** 物料id */
    materialId: number;
    /** 现有库存量 */
    onHandInventory: number;
    /** 归属方 */
    ownnerId: number;
    /** 计划方 */
    plannerId: number;
    /** 采购系数 */
    purchaseCoefficient: number;
    /** 调料备料单号 */
    purchaseOrderNo: string;
    /** 采购单价 */
    purchasePrice: number;
    /** 采购单位 */
    purchaseUnit: string;
    /** 预计入库量 */
    scheduledInventory: number;
    /** 尺码 */
    size: string;
    /** 来源单据ID */
    sourceBillId: number;
    /** 规格 */
    specification?: string;
    /** 规格编码 */
    specificationCode?: string;
    /** 供应商色号 */
    supplierColorNo: string;
    /** 供应商货号 */
    supplierGoodsNo: string;
    /** 供应商id */
    supplierId: number;
    /** 租户ID */
    tenantId: number;
    /** 缸号id */
    vatId: number;
    /** 缸号 */
    vatNo: string;
    /** 仓库编码 */
    warehouseCode: string;
    /** 库存地编码 */
    warehouseDistrictCode: string;
    /** 库存地id */
    warehouseDistrictId: number;
    /** 仓库id */
    warehouseId: number;
  };

  type WarehouseInventoryDTO = {
    /** 有效标记 1：禁用 0：有效 */
    activeFlag?: number;
    /** 调料设计号 */
    allocateDesignNo?: string;
    /** 调料设计师 */
    allocateDesignerName?: string;
    /** 调料单号 */
    allocateOrderNo?: string;
    /** 基本单价 */
    basePrice?: number;
    /** 基本单位 */
    baseUnit?: string;
    /** 批次id */
    batchId?: string;
    /** 批次号 */
    batchNo?: string;
    /** 业务明细id */
    businessDetailId?: number;
    /** 创建人 */
    createBy?: string;
    /** 创建人(名称) */
    createByName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 删除标记 1： 删除 0：未删除 */
    deleteFlag?: number;
    /** 设计号 */
    designNo?: string;
    /** 设计师(id) */
    designerId?: string;
    /** 设计师(名称) */
    designerName?: string;
    /** 设计号类型： 1：库存组 0：设计号 */
    designoTypeFlag?: number;
    /** 主键id */
    inventoryId?: string;
    /** 物料类型code */
    materialCategoryCode?: string;
    /** 物料编码 */
    materialCode?: string;
    /** 物料色号编码 */
    materialColorCode?: string;
    /** 物料色号id */
    materialColorId?: string;
    /** 物料色号名称 */
    materialColorName?: string;
    /** 物料id */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 修改人 */
    modifyBy?: string;
    /** 修改人(名称) */
    modifyByName?: string;
    /** 修改时间 */
    modifyTime?: string;
    /** 现有库存量 */
    onHandInventory?: number;
    /** 归属方 */
    ownnerId?: string;
    /** 计划方 */
    plannerId?: string;
    /** 采购系数 */
    purchaseCoefficient?: number;
    /** 调料备料单号 */
    purchaseOrderNo?: string;
    /** 采购单价 */
    purchasePrice?: number;
    /** 采购单位 */
    purchaseUnit?: string;
    /** 预计入库量 */
    scheduledInventory?: number;
    /** 尺码 */
    size?: string;
    /** 规格 */
    specification?: string;
    /** 规格编码 */
    specificationCode?: string;
    /** 库存汇总信息 */
    sumInfo?: InventorySumInfoDTO;
    /** 供应商色号 */
    supplierColorNo?: string;
    /** 供应商货号 */
    supplierGoodsNo?: string;
    /** 供应商id */
    supplierId?: string;
    /** 租户ID */
    tenantId?: string;
    /** 缸号id */
    vatId?: string;
    /** 缸号 */
    vatNo?: string;
    /** 版本号 */
    version?: number;
    /** 仓库编码 */
    warehouseCode?: string;
    /** 库存地编码 */
    warehouseDistrictCode?: string;
    /** 库存地id */
    warehouseDistrictId?: string;
    /** 库存地类型code(数据字典) */
    warehouseDistrictTypeCode?: string;
    /** 仓库id */
    warehouseId?: string;
  };

  type WarehouseInventoryDetailCreateCmd = {
    /** 有效标记 1：禁用 0：有效 */
    activeFlag: number;
    /** 明细类型code(数据字典) */
    detailTypeCode: string;
    /** 库存数量 */
    inventory: number;
    /** 主键id */
    inventoryDetailId?: number;
    /** 库存表id */
    inventoryId: number;
    /** 库存类型code(数据字典) */
    inventoryTypeCode: string;
    /** 租户ID */
    tenantId: number;
    /** 库存地id */
    warehouseDistrictId: number;
    /** 仓库id */
    warehouseId: number;
  };

  type WarehouseInventoryDetailDTO = {
    /** 有效标记 1：禁用 0：有效 */
    activeFlag?: number;
    /** 创建人 */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 删除标记 1： 删除 0：未删除 */
    deleteFlag?: number;
    /** 明细类型code(数据字典) */
    detailTypeCode?: string;
    /** 库存数量 */
    inventory?: number;
    /** 主键id */
    inventoryDetailId?: string;
    /** 库存表id */
    inventoryId?: string;
    /** 库存类型code(数据字典) */
    inventoryTypeCode?: string;
    /** 修改人 */
    modifyBy?: string;
    /** 修改时间 */
    modifyTime?: string;
    /** 租户ID */
    tenantId?: string;
    /** 版本号 */
    version?: number;
    /** 库存地id */
    warehouseDistrictId?: string;
    /** 仓库id */
    warehouseId?: string;
  };

  type WarehouseInventoryDetailUpdateCmd = {
    /** 有效标记 1：禁用 0：有效 */
    activeFlag: number;
    /** 明细类型code(数据字典) */
    detailTypeCode: string;
    /** 库存数量 */
    inventory: number;
    /** 主键id */
    inventoryDetailId: number;
    /** 库存表id */
    inventoryId: number;
    /** 库存类型code(数据字典) */
    inventoryTypeCode: string;
    /** 租户ID */
    tenantId: number;
    /** 库存地id */
    warehouseDistrictId: number;
    /** 仓库id */
    warehouseId: number;
  };

  type WarehouseInventoryExternalDTO = {
    /** 批次号 */
    batchNo?: string;
    /** 品牌Id */
    brandId?: string;
    /** 品牌名称 */
    brandName?: string;
    /** 库存数量 */
    inventory?: number;
    /** 库存明细Id */
    inventoryDetailId?: string;
    /** 库存Id */
    inventoryId?: string;
    /** 颜色Id */
    materialColorId?: string;
    /** 颜色名称 */
    materialColorName?: string;
    /** 物料Id */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 采购订单号 */
    purchaseOrderNo?: string;
    /** 库存规格 */
    specification?: string;
    /** 库存规格编码 */
    specificationCode?: string;
    /** 缸号 */
    vatNo?: string;
  };

  type WarehouseInventoryExternalQuery = {
    /** 批次号 */
    batchNo?: string;
    /** 品牌Id */
    brandId?: number;
    /** 当前页号（取值从1开始） */
    current?: number;
    /** 明细类型 */
    detailTypeCode?: 'DESIGN_NO' | 'LOCKED' | 'PK_LOCKED' | 'SHARED';
    /** 库存数量至 */
    inventoryEnd?: number;
    /** 库存数量从 */
    inventoryStart?: number;
    /** 库存类型 */
    inventoryTypeCode?: 'ON_HAND_INVENTORY' | 'SCHEDULED_INVENTORY';
    /** 颜色Id */
    materialColorId?: number;
    /** 物料Id */
    materialId?: number;
    /** 排序设置列表 */
    orders?: Order[];
    /** 采购订单号 */
    purchaseOrderNo?: string;
    /** 每页显示条数 */
    size?: number;
    /** 缸号 */
    vatNo?: string;
  };

  type WarehouseInventoryGroupSumDTO = {
    /** 品牌Id */
    brandId?: string;
    /** 品牌名称 */
    brandName?: string;
    /** 库存总数 */
    inventorySum?: number;
    /** 颜色Id */
    materialColorId?: string;
    /** 颜色名称 */
    materialColorName?: string;
    /** 物料Id */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
  };

  type WarehouseInventoryGroupSumQuery = {
    /** 品牌Id */
    brandId?: number;
    /** 明细类型 */
    detailTypeCode?: 'DESIGN_NO' | 'LOCKED' | 'PK_LOCKED' | 'SHARED';
    /** 库存类型 */
    inventoryTypeCode?: 'ON_HAND_INVENTORY' | 'SCHEDULED_INVENTORY';
    /** 颜色Id */
    materialColorId?: number;
    /** 物料Id */
    materialId?: number;
  };

  type WarehouseInventoryInfoDTO = {
    /** 有效标记 1：禁用 0：有效 */
    activeFlag?: number;
    /** 调料设计号 */
    allocateDesignNo?: string;
    /** 调料设计师(名称) */
    allocateDesignerName?: string;
    /** 调料单号 */
    allocateOrderNo?: string;
    /** 备货年份 */
    allocateYear?: number;
    /** 基本单价 */
    basePrice?: number;
    /** 基本单位 */
    baseUnit?: string;
    /** 基本单位名称 */
    baseUnitName?: string;
    /** 批次信息 */
    batch?: WarehouseBatchBaseInfoDTO;
    /** 品牌id */
    brandId?: number;
    /** 品牌名称 */
    brandName?: string;
    /** 业务明细id */
    businessDetailId?: number;
    /** 创建人 */
    createBy?: string;
    /** 创建人(名称) */
    createByName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 删除标记 1： 删除 0：未删除 */
    deleteFlag?: number;
    /** 设计号 */
    designNo?: string;
    /** 设计师(id) */
    designerId?: string;
    /** 设计师(名称) */
    designerName?: string;
    /** 设计号类型： 1：库存组 0：设计号 */
    designoTypeFlag?: number;
    /** 入库时间 */
    entryTime?: string;
    /** 主键id */
    inventoryId?: string;
    /** 物料信息 */
    material?: MaterialBaseInfoDTO;
    /** 物料颜色信息 */
    materialColor?: MaterialColorBaseInfoDTO;
    /** 修改人 */
    modifyBy?: string;
    /** 修改人(名称) */
    modifyByName?: string;
    /** 修改时间 */
    modifyTime?: string;
    /** 在仓期 */
    onHandDays?: number;
    /** 现有库存量 */
    onHandInventory?: number;
    /** 归属方(编码) */
    ownnerCode?: string;
    /** 归属方(id) */
    ownnerId?: string;
    /** 归属方(名称) */
    ownnerName?: string;
    /** 列表缩略图 */
    picUrl?: string;
    /** 图片 */
    picUrls?: ImageDirectUrlResultDTO[];
    /** 计划方(code) */
    plannerCode?: string;
    /** 计划方(id) */
    plannerId?: string;
    /** 计划方(名称) */
    plannerName?: string;
    /** 采购系数 */
    purchaseCoefficient?: number;
    /** 调料备料单号 */
    purchaseOrderNo?: string;
    /** 采购单价 */
    purchasePrice?: number;
    /** 采购单位 */
    purchaseUnit?: string;
    /** 采购单位名称 */
    purchaseUnitName?: string;
    /** 预计入库量 */
    scheduledInventory?: number;
    /** 系列 */
    series?: string;
    /** 系列 */
    seriesName?: string;
    /** 尺码 */
    size?: string;
    /** 规格 */
    specification?: string;
    specificationCode?: string;
    /** 常备物料标识 */
    standingMaterialFlag?: string;
    /** 常备物料标识名称 */
    standingMaterialFlagName?: string;
    /** 库存汇总信息 */
    sumInfo?: InventorySumInfoDTO;
    /** 供应商信息 */
    supplier?: SupplierBaseInfoDTO;
    /** 供应商色号 */
    supplierColorNo?: string;
    /** 供应商货号 */
    supplierGoodsNo?: string;
    /** 租户ID */
    tenantId?: string;
    /** 缸号创建时间 */
    vatCreateTime?: string;
    /** 缸号id */
    vatId?: string;
    /** 缸号 */
    vatNo?: string;
    /** 版本号 */
    version?: number;
    /** 仓库信息 */
    warehouse?: WarehouseBaseInfoDTO;
    /** 库存地编码 */
    warehouseDistrictCode?: string;
    /** 库存地id */
    warehouseDistrictId?: string;
    /** 库存地名称 */
    warehouseDistrictName?: string;
    /** 库存地类型code(数据字典) */
    warehouseDistrictTypeCode?: string;
    /** 库存地类型名称 */
    warehouseDistrictTypeName?: string;
    /** 年份 */
    year?: number;
  };

  type WarehouseInventoryInfoQuery = {
    /** 有效标记 1：禁用 0：有效 */
    activeFlag?: number;
    /** 调料设计号 */
    allocateDesignNo?: string;
    /** 调料设计师 */
    allocateDesignerName?: string;
    /** 调料单号 */
    allocateOrderNo?: string;
    /** 批次id */
    batchId?: number;
    /** 批次号 */
    batchNo?: string;
    /** 批次状态(code) */
    batchStatusCode?: string;
    /** 批次状态 */
    batchStatusCodes?: string[];
    /** 品牌id */
    brandIds?: number[];
    /** 业务明细id */
    businessDetailId?: number;
    /** 当前页号（取值从1开始） */
    current?: number;
    /** 设计号 */
    designNo?: string;
    /** 批量设计号 */
    designNos?: string[];
    /** 设计师Id */
    designerId?: number;
    /** 设计师(名称) */
    designerName?: string;
    /** 入库起始时间 */
    entryTimeFrom?: string;
    /** 入库结束时间 */
    entryTimeTo?: string;
    /** 在仓期天数自 */
    inWarehouseDayFrom?: number;
    /** 在仓期天数至 */
    inWarehouseDayTo?: number;
    /** 主键id */
    inventoryId?: number;
    /** 批量主鍵ID */
    inventoryIds?: number[];
    materialCategoryCode?: string;
    /** 物料类型 */
    materialCategoryCodes?: string[];
    /** 物料编码 */
    materialCode?: string;
    /** 物料编码列表 */
    materialCodes?: string[];
    /** 物料色号编码 */
    materialColorCode?: string;
    /** 物料色号id */
    materialColorId?: number;
    /** 物料色号名称 */
    materialColorName?: string;
    /** 物料色号名称 */
    materialColorNumberName?: string;
    /** 物料id */
    materialId?: number;
    /** 物料ids */
    materialIds?: number[];
    /** 是否需要库存汇总信息 */
    needSum?: boolean;
    /** 排序设置列表 */
    orders?: Order[];
    /** 归属方 */
    ownnerId?: number;
    /** 批量库存归属方id */
    ownnerIds?: number[];
    /** 计划方 */
    plannerId?: number;
    /** 批量库存计划方id */
    plannerIds?: number[];
    /** 计划方(名称) */
    plannerName?: string;
    /** 调料备料单号 */
    purchaseOrderNo?: string;
    /** 预计入库量 */
    scheduledInventory?: number;
    /** 系列 */
    series?: string[];
    /** 每页显示条数 */
    size?: number;
    /** 规格 */
    specification?: string;
    /** 供应商色号 */
    supplierColorNo?: string;
    /** 供应商货号 */
    supplierGoodsNo?: string;
    /** 供应商id */
    supplierId?: number;
    /** 批量供应商id */
    supplierIds?: number[];
    /** 租户ID */
    tenantId?: number;
    /** 7日内有更新 */
    updateIn7Days?: string;
    /** 缸号id */
    vatId?: number;
    /** 缸号 */
    vatNo?: string;
    /** 仓库编码 */
    warehouseCode?: string;
    /** 库存地编码 */
    warehouseDistrictCode?: string;
    /** 库存地id */
    warehouseDistrictId?: number;
    /** 库存地id */
    warehouseDistrictIds?: number[];
    /** 库存地类型 */
    warehouseDistrictTypeCode?: string;
    /** 仓库id */
    warehouseId?: number;
    /** 仓库名称 */
    warehouseName?: string;
    /** 仓库类型(code) */
    warehouseTypeCode?: string;
    /** 仓库类型 */
    warehouseTypeCodes?: string[];
    /** 年份 */
    years?: number[];
  };

  type WarehouseInventoryOccupationCreateCmd = {
    /** 有效标记 1：禁用 0：有效 */
    activeFlag: number;
    /** 单据类型code(数据字典) */
    billTypeCode: string;
    /** 库存明细id */
    inventoryDetailId: number;
    /** 锁定时间 */
    lockBeginTime: string;
    /** 锁定数量 */
    lockCount: number;
    /** 释放时间 */
    lockEndTime: string;
    /** 来源单据ID */
    sourceBillId: number;
    /** 租户ID */
    tenantId: number;
  };

  type WarehouseInventoryOccupationDTO = {
    /** 有效标记 1：禁用 0：有效 */
    activeFlag?: number;
    /** 单据类型code(数据字典) */
    billTypeCode?: string;
    /** 创建人 */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 删除标记 1： 删除 0：未删除 */
    deleteFlag?: number;
    /** 库存明细id */
    inventoryDetailId?: string;
    /** 主键id */
    inventoryOccupationId?: string;
    /** 锁定时间 */
    lockBeginTime?: string;
    /** 锁定数量 */
    lockCount?: number;
    /** 释放时间 */
    lockEndTime?: string;
    /** 修改人 */
    modifyBy?: string;
    /** 修改时间 */
    modifyTime?: string;
    /** 来源单据ID */
    sourceBillId?: string;
    /** 租户ID */
    tenantId?: string;
    /** 版本号 */
    version?: number;
  };

  type WarehouseInventoryOccupationUpdateCmd = {
    /** 有效标记 1：禁用 0：有效 */
    activeFlag: number;
    /** 单据类型code(数据字典) */
    billTypeCode: string;
    /** 库存明细id */
    inventoryDetailId: number;
    /** 主键id */
    inventoryOccupationId: number;
    /** 锁定时间 */
    lockBeginTime: string;
    /** 锁定数量 */
    lockCount: number;
    /** 释放时间 */
    lockEndTime: string;
    /** 来源单据ID */
    sourceBillId: number;
    /** 租户ID */
    tenantId: number;
  };

  type WarehouseInventoryOwnnerDTO = {
    /** 库存归属方ID */
    ownnerId?: string;
    /** 库存归属方名称 */
    ownnerName?: string;
    /** 租户id */
    tenantId?: string;
  };

  type WarehouseInventoryPlannerDTO = {
    /** 库存计划方ID */
    plannerId?: string;
    /** 库存计划方名称 */
    plannerName?: string;
    /** 租户id */
    tenantId?: string;
  };

  type WarehouseInventoryQuery = {
    /** 有效标记 1：禁用 0：有效 */
    activeFlag?: number;
    /** 调料设计号 */
    allocateDesignNo?: string;
    /** 调料设计师 */
    allocateDesignerName?: string;
    /** 调料单号 */
    allocateOrderNo?: string;
    /** 批次id */
    batchId?: number;
    /** 批量批次id */
    batchIds?: number[];
    /** 批次号 */
    batchNo?: string;
    /** 批次状态 */
    batchStatusCode?: string;
    /** 批次状态 */
    batchStatusCodes?: string[];
    /** 品牌id */
    brandIds?: number[];
    /** 业务明细id */
    businessDetailId?: number;
    /** 客户id列表 */
    clientIds?: number[];
    /** 当前页号（取值从1开始） */
    current?: number;
    /** 设计号 */
    designNo?: string;
    /** 批量设计号 */
    designNos?: string[];
    /** 设计师Id */
    designerId?: number;
    /** 设计师 */
    designerName?: string;
    /** 入库起始时间 */
    entryTimeFrom?: string;
    /** 入库结束时间 */
    entryTimeTo?: string;
    /** 在仓期天数自 */
    inWarehouseDayFrom?: number;
    /** 在仓期天数至 */
    inWarehouseDayTo?: number;
    /** 主键id */
    inventoryId?: number;
    /** 批量主鍵ID */
    inventoryIds?: number[];
    /** 物料类型 */
    materialCategoryCode?: string;
    /** 物料类型 */
    materialCategoryCodes?: string[];
    /** 物料编码 */
    materialCode?: string;
    /** 物料色号编码 */
    materialColorCode?: string;
    /** 物料色号id */
    materialColorId?: number;
    /** 物料色号id集合 */
    materialColorIds?: number[];
    /** 物料色号名称 */
    materialColorName?: string;
    /** 物料id */
    materialId?: number;
    /** 物料ids */
    materialIds?: number[];
    /** 更新起始时间 */
    modifyTimeFrom?: string;
    /** 更新结束时间 */
    modifyTimeTo?: string;
    /** 是否需要库存汇总信息 */
    needSum?: boolean;
    /** 排序设置列表 */
    orders?: Order[];
    /** 归属方 */
    ownnerId?: number;
    /** 批量库存归属方id */
    ownnerIds?: number[];
    /** 计划方id */
    plannerId?: number;
    /** 批量库存计划方id */
    plannerIds?: number[];
    /** 计划方 */
    plannerName?: string;
    /** 调料备料单号 */
    purchaseOrderNo?: string;
    /** 预计入库量 */
    scheduledInventory?: number;
    /** 系列 */
    series?: string[];
    /** 每页显示条数 */
    size?: number;
    /** 规格 */
    specification?: string;
    /** 规格列表 */
    specifications?: string[];
    /** 供应商色号 */
    supplierColorNo?: string;
    /** 供应商货号 */
    supplierGoodsNo?: string;
    /** 供应商id */
    supplierId?: number;
    /** 批量供应商id */
    supplierIds?: number[];
    /** 供应商名称 */
    supplierName?: string;
    tenant?: boolean;
    /** 租户ID */
    tenantId?: number;
    /** 7日内有更新 */
    updateIn7Days?: string;
    useBrandId?: string;
    /** 缸号id */
    vatId?: number;
    /** 缸号 */
    vatNo?: string;
    /** 仓库编码 */
    warehouseCode?: string;
    /** 批量仓库编码 */
    warehouseCodes?: string[];
    /** 库存地编码 */
    warehouseDistrictCode?: string;
    /** 批量库存地id */
    warehouseDistrictCodes?: string[];
    /** 库存地id */
    warehouseDistrictId?: number;
    /** 批量库存地id */
    warehouseDistrictIds?: number[];
    /** 仓库id */
    warehouseId?: number;
    /** 仓库名称 */
    warehouseName?: string;
    /** 仓库类型 */
    warehouseTypeCode?: string;
    /** 仓库类型 */
    warehouseTypeCodes?: string[];
    /** 年份 */
    years?: number[];
  };

  type WarehouseInventorySAP30InfoQuery = {
    /** 条码 */
    barcode?: string;
    /** 当前页号（取值从1开始） */
    current?: number;
    inventoryStatus?: number;
    /** 物料编码 */
    materialCode?: string;
    /** 物料色号编码 */
    materialColorCode?: string;
    /** 是否需要库存汇总信息 */
    needSum?: boolean;
    /** 排序设置列表 */
    orders?: Order[];
    /** 调料备料单号 */
    purchaseOrderNo?: string;
    /** 卷号 */
    rollNo?: string;
    /** 每页显示条数 */
    size?: number;
    /** 规格编码 */
    specificationCode?: string;
    /** 缸号 */
    vatNo?: string;
    /** 库存地编码 */
    warehouseDistrictCode: string;
  };

  type WarehouseInventorySAP50InfoQuery = {
    /** 品牌编码 */
    brand?: string;
    /** 当前页号（取值从1开始） */
    current?: number;
    /** 需求数量 */
    demandCount?: number;
    /** 需求单号 */
    demandOrderCode?: string;
    /** 设计号 */
    designNo?: string;
    designerEmpNo?: string;
    /** 入库起始时间 */
    entryTimeFrom?: string;
    /** 入库结束时间 */
    entryTimeTo?: string;
    inventoryStatus?: number;
    /** 库存查询类型 */
    inventoryType?: string;
    itemType?: number;
    /** 物料编码 */
    materialCode?: string;
    /** 物料色号编码 */
    materialColorCode?: string;
    /** 是否需要库存汇总信息 */
    needSum?: boolean;
    /** 排序设置列表 */
    orders?: Order[];
    /** 调料备料单号 */
    purchaseOrderNo?: string;
    /** 每页显示条数 */
    size?: number;
    /** 规格 */
    specification?: string;
    /** 规格编码 */
    specificationCode?: string;
    /** 供应商编码 */
    supplierCode?: string;
    /** 供应商色号 */
    supplierColorNo?: string;
    /** 供应商货号 */
    supplierGoodsNo?: string;
    /** 供应商名称 */
    supplierName?: string;
    uuids?: string[];
    /** 缸号 */
    vatNo?: string;
    /** 库存地编码 */
    warehouseDistrictCode: string;
    /** 库存地名称 */
    warehouseDistrictName?: string;
  };

  type WarehouseInventorySAPInfoDTO = {
    allocateCategory?: string;
    allocateOrderType?: string;
    allocatePoNo?: string;
    allocateStyle?: string;
    barcode?: string;
    billNo?: string;
    brand?: string;
    brandId?: number;
    brandName?: string;
    category?: string;
    companyName?: string;
    composition?: string;
    costAmount?: number;
    costPrice?: number;
    designNo?: string;
    designNoDesc?: string;
    info?: WarehouseInventoryInfoDTO;
    inventoryQuantity?: number;
    inventoryStatus?: string;
    inventoryStatusName?: string;
    latestEntryTime?: string;
    modelNo?: string;
    onHandAvailableInventory?: number;
    onHandInventory?: number;
    onHandLockedInventory?: number;
    preparationDesignFlag?: string;
    productionReservationTime?: string;
    purchaseQuantity?: number;
    purchaseUnit?: string;
    purchaseVoucher?: string;
    qualifiedAvailableInventory?: number;
    qualifiedInventory?: number;
    qualifiedLockedInventory?: number;
    rollNo?: string;
    sapWarehouseName?: string;
    season?: string;
    serial?: string;
    sourceSystem?: string;
    specification?: string;
    stockAmount?: number;
    stockLocation?: string;
    style?: string;
    supplierColorNo?: string;
    supplierGoodsNo?: string;
    supplierScmCode?: string;
    unQualifiedInventory?: number;
    unlimitEvaluatedFlag?: string;
    uuid?: string;
    warehouseDistrictCode?: string;
    year?: string;
  };

  type WarehouseInventoryUpdateCmd = {
    /** 有效标记 1：禁用 0：有效 */
    activeFlag: number;
    /** 调料设计号 */
    allocateDesignNo: string;
    /** 调料设计师 */
    allocateDesignerName: string;
    /** 调料单号 */
    allocateOrderNo: string;
    /** 基本单价 */
    basePrice: number;
    /** 基本单位 */
    baseUnit: string;
    /** 批次id */
    batchId: number;
    /** 批次号 */
    batchNo: string;
    /** 业务明细id */
    businessDetailId: number;
    /** 设计号 */
    designNo: string;
    /** 库存明细 */
    inventoryDetails: InventoryDetail[];
    /** 主键id */
    inventoryId: number;
    /** 物料类型code(数据字典) */
    materialCategoryCode: string;
    /** 物料编码 */
    materialCode: string;
    /** 物料色号编码 */
    materialColorCode: string;
    /** 物料色号id */
    materialColorId: number;
    /** 物料id */
    materialId: number;
    /** 现有库存量 */
    onHandInventory: number;
    /** 归属方 */
    ownnerId: number;
    /** 计划方 */
    plannerId: number;
    /** 采购系数 */
    purchaseCoefficient: number;
    /** 调料备料单号 */
    purchaseOrderNo: string;
    /** 采购单价 */
    purchasePrice: number;
    /** 采购单位 */
    purchaseUnit: string;
    /** 预计入库量 */
    scheduledInventory: number;
    /** 尺码 */
    size: string;
    /** 规格 */
    specification: string;
    /** 供应商色号 */
    supplierColorNo: string;
    /** 供应商货号 */
    supplierGoodsNo: string;
    /** 供应商id */
    supplierId: number;
    /** 租户ID */
    tenantId: number;
    /** 缸号id */
    vatId: number;
    /** 缸号 */
    vatNo: string;
    /** 仓库编码 */
    warehouseCode: string;
    /** 库存地编码 */
    warehouseDistrictCode: string;
    /** 库存地id */
    warehouseDistrictId: number;
    /** 仓库id */
    warehouseId: number;
  };

  type WarehouseTransferSharedInventoryQuery = {
    /** 短缺数量(也就是想占用的数量) */
    amount: number;
    /** 品牌id */
    brandId: string;
    /** 物料编码 */
    materialCode: string;
    /** 物料色号编码 */
    materialColorCode: string;
    /** 归属方 */
    ownnerId: string;
    /** 目标设计号 */
    targetDesignNo: string;
  };

  type WarehouseUpdateCmd = {
    /** 有效标记 1：禁用 0：有效 */
    activeFlag: number;
    /** 地址 */
    address: string;
    /** 城市 */
    city: string;
    /** 客户id */
    clientId: number;
    /** 客户名称 */
    clientName: string;
    /** 联系人 */
    contactPerson: string;
    /** 联系电话 */
    contactPhone: string;
    /** 国家 */
    country: string;
    /** 首选标记 0:非首选 1:首选 */
    primaryFlag: number;
    /** 省份 */
    province: string;
    /** 租户ID */
    tenantId: number;
    /** 仓库类型code(数据字典) */
    typeCode: string;
    /** 仓库编码 */
    warehouseCode: string;
    /** 主键id */
    warehouseId: number;
    /** 仓库名称 */
    warehouseName: string;
  };

  type WarehouseVatInfoCreateCmd = {
    /** 有效标记 1：禁用 0：有效 */
    activeFlag: number;
    /** 批次id */
    batchId: number;
    /** 批次号 */
    batchNo: string;
    /** 租户ID */
    tenantId: number;
    /** 缸号 */
    vatNo: string;
  };

  type WarehouseVatInfoDTO = {
    /** 有效标记 1：禁用 0：有效 */
    activeFlag?: number;
    /** 批次id */
    batchId?: string;
    /** 批次号 */
    batchNo?: string;
    /** 创建人 */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 删除标记 1： 删除 0：未删除 */
    deleteFlag?: number;
    /** 修改人 */
    modifyBy?: string;
    /** 修改时间 */
    modifyTime?: string;
    /** 租户ID */
    tenantId?: string;
    /** 主键id */
    vatId?: string;
    /** 缸号 */
    vatNo?: string;
    /** 版本号 */
    version?: number;
  };

  type WarehouseVatInfoUpdateCmd = {
    /** 有效标记 1：禁用 0：有效 */
    activeFlag: number;
    /** 批次id */
    batchId: number;
    /** 批次号 */
    batchNo: string;
    /** 租户ID */
    tenantId: number;
    /** 主键id */
    vatId: number;
    /** 缸号 */
    vatNo: string;
  };
}
