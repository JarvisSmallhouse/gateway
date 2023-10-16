
class XCMP {
    static OPERATION_TYPE_REQUEST = 0x00;
    static OPERATION_TYPE_REPLY = 0x08;
    static OPERATION_TYPE_BROADCAST = 0x0B;

    // B410 battery?
    // 410 read battery 0x80
    // 8410 battery response [0,128,0,90,255,255,90,1] 90% [0,128,0,88,255,255,88,1] 88%

    static OPCODE_RADIO_STATUS_REQUEST = 0x000e; // use STATUS_*
    static OPCODE_RADIO_STATUS_REPLY = 0x800e;
    static OPCODE_RADIO_VERSION_REQUEST = 0x000F; // (0x30, 0x41, 0x50, 0x52, ) VERSION_REQUEST_TYPE_*
    static OPCODE_RADIO_VERSION_REPLY = 0x800F;
    static OPCODE_RADIO_CHANGE_SERIAL_REQUEST = 0x0011; // 013131314142433131313100
    static OPCODE_RADIO_MODEL_REPLY = 0x8010;
    static OPCODE_RADIO_LANGPKGINFO_REQUEST = 0x02C; // 0x01
    static OPCODE_RADIO_LANGPKGINFO_REPLY = 0x802C;
    static OPCODE_CLONE_READ_REQUEST = 0x010a;
    static OPCODE_CLONE_READ_REPLY = 0x810a;
    static OPCODE_CHZONE_REQUEST = 0x040D;
    // - 8000000000 - query / reply(0x840D)  80<2b zn><2b ch>
    // - 8100000000 - get zn count
    // - 82<2b zn>0000 - get ch count
    // - 0300000000 ch+
    // - 0400000000 ch-
    // - 0700030000 Set to zone 3 (site 2)
    static OPCODE_VOLUME_REQUEST = 0x0406;
    // - FFFF8000 - read vol, reply 00FFFF8050 (level 80) 00FFFF8064 (level 100)
    // - FFFF0100 - vol+
    // - FFFF0200 - vol-
    // - FFFF0558 - set to 88
    static OPCODE_RADIO_CONTROL_REQUEST = 0x041C;
    // <RADIO_CONTROL_*><RADIO_CONTROL_OPERATION_*><unk 0x01><dmr id len><dmr id><unk 0x00><unk 0x00>
    // - 0001010300271C0000 - radio check 10012 - reply dead 00ff0001010300271c00000000
    // - 0401010300271C0000 - dekey 10012
    // - 0301010300271C0000 - monitor 10012
    // - 0101010300271C0000 - disable 10012
    // - 0201010300271C0000 - enable 10012
    static OPCODE_KEY_REQUEST = 0x0415;
    // - 0100 ON PTT
    // - 0200 OFF PTT


    static OPCODE_TXPWR_REQUEST = 0x408;
    // - 01<TX_POWER_LEVEL_* 2 byte>  set
    // - 800000 get
    static OPCODE_TXPWR_REPLY = 0x8408;
    // <XCMP_RESULT_*><01|80><TX_POWER_LEVEL_* 2 byte>
    static OPCODE_TXPWR_BROADCAST = 0xB408;

    static OPCODE_VOLUME_BROADCAST = 0xB406; // FFF38F3 - vol 56
    static OPCODE_CHZONE_BROADCAST = 0xB40D; // 00020003  Zone2 CH3
    static OPCODE_CALLCONTROL_BROADCAST = 0xB41E; // 0601010300274A0000030000E40000000000 / <CALL_CONTROL_TYPE_*><CALL_CONTROL_STATE_*><CALL_ADDRESS_TYPE_*><XCMP.getAddressSize><Address><Port 2 bytes><group id len><Group id>
    static OPCODE_SPEAKER_BROADCAST = 0xB407; // 00010000
    static OPCODE_BRIGHTNESS_BROADCAST = 0xB411;

    // B457 0000021000 ?
    // B400 info broadcast
    // - 09040005000100001c0005020004020500070109000a010d100e02110013ff140019fd1a00 4401e
    // - 09020005000100001c0005020704020500070109020a010dff0e02110013ff140019fd1a00 4801e
    // - 09 02 00 05 00 01 0000 1c
    // - <XcmpVersionMajorPart><XcmpVersionMinorPart><Build><XNL_CORE_TYPE_*><DEVICE_INIT_TYPE_*><DEVICE_TYPE_*><2b DEVICE_STATUS_*><attrs len>
    // - 0005020704020500070109020a010dff0e02110013ff140019fd1a00
    // - attrs DEVICE_ATTR_*


    static RADIO_CONTROL_OPERATION_EXECUTE = 0x01;
    static RADIO_CONTROL_OPERATION_QUERY_STATUS = 0x80;
    static RADIO_CONTROL_OPERATION_QUERY_ACTIVE = 0x81;

    static RADIO_CONTROL_CHECK = 0x00;
    static RADIO_CONTROL_DISABLE = 0x01;
    static RADIO_CONTROL_ENABLE = 0x02;
    static RADIO_CONTROL_MONITOR = 0x03;
    static RADIO_CONTROL_DEKEY = 0x04;
    static RADIO_CONTROL_CANCEL_QUEUED_MONITOR = 0x05;
    static RADIO_CONTROL_RADIO_KILL = 0x06;

    static DEVICE_ATTR_FAMILY = 0x00; // DEVICE_FAMILY_*
    static DEVICE_ATTR_DISPLAY = 0x02; // DEVICE_DISPLAY_TYPE_*
    static DEVICE_ATTR_SPEAKER = 0x03; // DEVICE_SPEAKER_TYPE_*
    static DEVICE_ATTR_RF_BAND = 0x04; // DEVICE_RF_BAND_*
    static DEVICE_ATTR_GPIO_CTRL = 0x05;
    static DEVICE_ATTR_RADIO_TYPE = 0x07;
    static DEVICE_ATTR_KEYPAD = 0x09; // DEVICE_KEYPAD_*
    static DEVICE_ATTR_CHANNEL_KNOB = 0x0D;
    static DEVICE_ATTR_VIRTUAL_PERSONALITY_SUPPORT = 0x0E;
    static DEVICE_ATTR_BT_TYPE = 0x11; // (0x00 = BT_BASIC)
    static DEVICE_ATTR_ACCELEROMETER_TYPE = 0x13; // (0xFF = unknown)
    static DEVICE_ATTR_GPS_TYPE = 0x14; // (0x00 = GPS_BASIC)
    static DEVICE_ATTR_WIFI_TYPE = 0x19; // (0xFD = unknown)
    static DEVICE_ATTR_BLE_TYPE = 0x1A; // (0x00 = BLE_BASIC)

    static XNL_CORE_TYPE_UNKNOWN = 0x00;
    static XNL_CORE_TYPE_COMMON_OLD = 0x02;
    static XNL_CORE_TYPE_STATION_CORE = 0x04;
    static XNL_CORE_TYPE_STATION_ENHANCED = 0x05;
    static XNL_CORE_TYPE_STATION_SL = 0x06;
    static XNL_CORE_TYPE_REPEATER_MOTOTRBO = 0x09;
    static XNL_CORE_TYPE_REPEATER_MTR = 0x0A;
    static XNL_CORE_TYPE_REPEATER_NGR = 0x0B;
    static XNL_CORE_TYPE_REPEATER_SLR = 0x0C;
    static XNL_CORE_TYPE_REPEATER_SLR1000 = 0x0D;

    static DEVICE_KEYPAD_NONE = 0x00;
    static DEVICE_KEYPAD_LIMITED = 0x01;
    static DEVICE_KEYPAD_FULL = 0x02;
    
    static DEVICE_RADIO_TYPE_MOBILE = 0x00;
    static DEVICE_RADIO_TYPE_PORTABLE = 0x01;
    static DEVICE_RADIO_TYPE_REPEATER = 0x02;

    static DEVICE_RF_BAND_UHFR1 = 0x00;
    static DEVICE_RF_BAND_UHFR2 = 0x01;
    static DEVICE_RF_BAND_VHF = 0x02;
    static DEVICE_RF_BAND_700_800_MHZ = 0x03;
    static DEVICE_RF_BAND_800_MHZ = 0x04;
    static DEVICE_RF_BAND_900_MHZ = 0x05;
    static DEVICE_RF_BAND_350_MHZ = 0x06;
    static DEVICE_RF_BAND_UHF_WIDE_BAND = 0x07;


    static DEVICE_SPEAKER_TYPE_NONE = 0x00;
    static DEVICE_SPEAKER_TYPE_PWR = 0x01;
    static DEVICE_SPEAKER_TYPE_NON_PWR = 0x02;
    static DEVICE_SPEAKER_TYPE_HANDSET = 0x03;

    static DEVICE_DISPLAY_TYPE_NONE = 0x00;
    static DEVICE_DISPLAY_TYPE_BMP_4 = 0x04;
    static DEVICE_DISPLAY_TYPE_BMP_7 = 0x07;
    static DEVICE_DISPLAY_TYPE_BMP_8 = 0x08;
    static DEVICE_DISPLAY_TYPE_BMP_9 = 0x09;
    static DEVICE_DISPLAY_TYPE_BMP_10= 0x0A;
    static DEVICE_DISPLAY_TYPE_BMP_11 = 0x0B;
    static DEVICE_DISPLAY_TYPE_BMP_GENERIC = 0xFF;

    static DEVICE_FAMILY_OTHER = 0x00;
    static DEVICE_FAMILY_MOTOTRBO = 0x05;

    static DEVICE_STATUS_POWER_UP_SUCCESS = 0x00;
    static DEVICE_STATUS_FATAL_ERROR = 0x80;

    static DEVICE_TYPE_UNKNOWN = 0x00;
    static DEVICE_TYPE_RF_TRANSCEIVER = 0x01;
    static DEVICE_TYPE_CONTROL_HEAD = 0x02;
    static DEVICE_TYPE_SIREN_PA = 0x03;
    static DEVICE_TYPE_VRS = 0x04;
    static DEVICE_TYPE_TRC_CONSOLETTE = 0x05;
    static DEVICE_TYPE_VEHICULAR_ADAPTER = 0x06;
    static DEVICE_TYPE_OPTION_BOARD = 0x07;
    static DEVICE_TYPE_AUTO_TEST_SYSTEM = 0x08;
    static DEVICE_TYPE_EXTERNAL_MIC = 0x09;
    static DEVICE_TYPE_IP_PERIPHERAL = 0x0A;
    static DEVICE_TYPE_NON_IP_PERIPHERAL = 0x0B;

    static DEVICE_INIT_TYPE_STATUS = 0x00;
    static DEVICE_INIT_TYPE_COMPLETE = 0x01;
    static DEVICE_INIT_TYPE_UPDATE = 0x02;

    static CALL_ADDRESS_TYPE_LOCALDEVICE = 0x00;
    static CALL_ADDRESS_TYPE_MOTOTRBOID = 0x01;
    static CALL_ADDRESS_TYPE_IPV4ADDRESS = 0x02;
    static CALL_ADDRESS_TYPE_IPV6ADDRESS = 0x03;
    static CALL_ADDRESS_TYPE_MDCID = 0x05;
    static CALL_ADDRESS_TYPE_MOTOANALOG3600TRUNK = 0x06;
    static CALL_ADDRESS_TYPE_PHONENUMBER = 0x07;
    static CALL_ADDRESS_TYPE_APCOCONVENTIONAL = 0x08;
    static CALL_ADDRESS_TYPE_APCO9600TRUNKING = 0x09;
    static CALL_ADDRESS_TYPE_APCO3600TRUNKING = 0x0A;
    static CALL_ADDRESS_TYPE_QUIKCALLII = 0x0B;
    static CALL_ADDRESS_TYPE_APCOTDMATRUNKING = 0x0C;
    static CALL_ADDRESS_TYPE_SELECT5ADDRESS = 0x0D;
    static CALL_ADDRESS_TYPE_ACCESSDEACCESSCODE = 0x0E;
    static CALL_ADDRESS_TYPE_SITEIDADDRESS = 0x0F;
    static CALL_ADDRESS_TYPE_UCS2STRINGID = 0x10;

    static CALL_CONTROL_TYPE_NO_CALL = 0x0;
    static CALL_CONTROL_TYPE_SELECTIVE_CALL = 0x0;
    static CALL_CONTROL_TYPE_CALL_ALERT = 0x0;
    static CALL_CONTROL_TYPE_PRIVATE_CALL = 0x0;
    static CALL_CONTROL_TYPE_ENHANCED_PRIVATE_CALL = 0x0;
    static CALL_CONTROL_TYPE_PRIVATE_PHONE_CALL = 0x0;
    static CALL_CONTROL_TYPE_GROUP_CALL = 0x0;
    static CALL_CONTROL_TYPE_DISPATCH_CALL = 0x0;
    static CALL_CONTROL_TYPE_CALL_ALERT_WITH_VOICE = 0x0;
    static CALL_CONTROL_TYPE_TELEGRAM_CALL = 0x0;
    static CALL_CONTROL_TYPE_GROUP_PHONE_CALL = 0x0;
    static CALL_CONTROL_TYPE_BROADCAST_CALL = 0x0;

    static CALL_CONTROL_STATE_NO_STATUS = 0x00;
    static CALL_CONTROL_STATE_CALL_DECODED = 0x01;
    static CALL_CONTROL_STATE_CALL_IN_PROGRESS = 0x02;
    static CALL_CONTROL_STATE_CALL_ENDED = 0x03;
    static CALL_CONTROL_STATE_CALL_INITIATED = 0x04;
    static CALL_CONTROL_STATE_NO_ACK = 0x06;
    static CALL_CONTROL_STATE_CALL_IN_HANGTIME = 0x07;
    static CALL_CONTROL_STATE_CALL_DECODED_CLEAR = 0x08;
    static CALL_CONTROL_STATE_CALL_DECODED_KEY_MATCHED = 0x09;
    static CALL_CONTROL_STATE_CALL_DECODED_KEY_MISMATCHED = 0x0A;
    static CALL_CONTROL_STATE_CALL_BUSY_QUEUED = 0x0B;
    static CALL_CONTROL_STATE_CHANNEL_ASSIGNED = 0x0C;
    static CALL_CONTROL_STATE_SYSTEM_DENIAL = 0x0D;

    static TX_POWER_LEVEL_LOW = 0x00;
    static TX_POWER_LEVEL_HIGH = 0x03;

    static XCMP_RESULT_SUCCESS = 0x00;
    static XCMP_RESULT_FAILTURE = 0x01;
    static XCMP_RESULT_INCORRECT_MODE = 0x02;
    static XCMP_RESULT_OPCODE_NOT_SUPPORTED = 0x03;
    static XCMP_RESULT_INVALID_PARAMETER = 0x04;
    static XCMP_RESULT_REPLY_TOO_BIG = 0x05;
    static XCMP_RESULT_SECURITY_LOCKED = 0x06;
    static XCMP_RESULT_FUNCTION_NOT_AVAILABLE = 0x07;
    static XCMP_RESULT_RADIO_BUSY = 0x11;
    static XCMP_RESULT_INVALID_TARGET_ADDRESS = 0x12;


    static VERSION_REQUEST_TYPE_HOST_SOFTWARE = 0x00;
    static VERSION_REQUEST_TYPE_CODEPLUG_VERSION = 0x42;
    static VERSION_REQUEST_TYPE_RFBAND = 0x63;
    static VERSION_REQUEST_TYPE_POWER_LEVEL = 0x65;
    static VERSION_REQUEST_TYPE_ESN = 0x6B;
    static VERSION_REQUEST_TYPE_OPTION_BOARD_FIRMWARE = 0x80;
    static VERSION_REQUEST_TYPE_OPTION_BOARD_HARDWARE = 0x81;

    // https://github.com/pboyd04/Moto.Net/blob/3364ecfa4f7c1229136b1265313cd42dc8db1c90/Moto.Net/Mototrbo/XNL/XCMP/XCMPStatus.cs
    // OPCODE_RADIO_STATUS_REQUEST
    // All
    static STATUS_RSSI = 0x02;
    static STATUS_MODEL_NUMBER = 0x07;
    static STATUS_SERIAL_NUMBER = 0x08;
    static STATUS_ESN = 0x09;
    static STATUS_PRODUCT_SERIAL_NUMBER = 0x0B;
    static STATUS_SIGNALING_MODE = 0x0D;
    static STATUS_MOTOTRBOID = 0x0E; //aka DMR ID
    static STATUS_RADIO_ALIAS = 0x0F;
    static STATUS_SELECT_5_ID = 0x16;
    static STATUS_UPTIME_AND_TIMESTAMP = 0x4D;


    // RDAC params
    static STATUS_AC_VOLTAGE = 0x36;
    static STATUS_DC_CURRENT = 0x37;
    static STATUS_CONTROL_VOLTAGE = 0x3c;
    static STATUS_EXCITER_CURRENT_SENSE = 0x3b;
    static STATUS_BATTERY_CHARGE_CURRENT = 0x34;
    static STATUS_BATTERY_CHARGE_VOLTAGE = 0x35;
    static STATUS_BATTERY_VOLTAGE = 0x33;
    static STATUS_MODEM_CURRENT = 0x39;
    static STATUS_MODEM_TEMPERATURE = 0x38;
    static STATUS_MODEM_VOLTAGE = 0x3a;
    static STATUS_OUTPUT_POWER = 0x42;
    static STATUS_PA_CURRENT1 = 0x3d;
    static STATUS_PA_CURRENT2 = 0x3e;
    static STATUS_PA_CURRENT3 = 0x3f;
    static STATUS_PA_CURRENT4 = 0x40;
    static STATUS_PA_TEMPERATURE = 0x41;
    static STATUS_WSWR = 0x43;

    opcode;
    data;

    constructor(opcode, data) {
        this.opcode = opcode;
        this.data = data;
    }

    static from(buffer) {
        if(buffer.length<2)
            return null;

        let opcode = buffer.readUInt16BE(0);
        let data = buffer.slice(2, buffer.length);

        return new XCMP(opcode, data);
    }

    getBuffer() {
        let buffer = Buffer.alloc(2);

        buffer.writeUInt16BE(this.opcode, 0);

        return Buffer.concat([buffer, this.data]);
    }

    static getAddressSize(addressType) {
        switch(addressType) {
            case XCMP.CALL_ADDRESS_TYPE_LOCALDEVICE:
                return 0;
            case XCMP.CALL_ADDRESS_TYPE_MOTOTRBOID:
                return 3;
            case XCMP.CALL_ADDRESS_TYPE_IPV4ADDRESS:
                return 4;
            case XCMP.CALL_ADDRESS_TYPE_MDCID:
                return 2;
            case XCMP.CALL_ADDRESS_TYPE_APCOCONVENTIONAL:
                return 4;
            case XCMP.CALL_ADDRESS_TYPE_QUIKCALLII:
                return 4;
            case XCMP.CALL_ADDRESS_TYPE_SELECT5ADDRESS:
                return 9;
        }

        return 0;
    }
}

module.exports = XCMP;
