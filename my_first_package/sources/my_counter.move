#[allow(duplicate_alias)]

module my_counter::counter {
    use sui::object::{Self, UID};
    use sui::transfer;
    use sui::tx_context::{Self, TxContext};

   public  struct Counter has key {
        id: UID,
        value: u64,
    }

    public entry fun create(ctx: &mut TxContext) {
        let counter = Counter { id: object::new(ctx), value: 0 };
        transfer::transfer(counter, tx_context::sender(ctx));
    }

    public entry fun increment(counter: &mut Counter) {
        counter.value = counter.value + 1;
    }
}